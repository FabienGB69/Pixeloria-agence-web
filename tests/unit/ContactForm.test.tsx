// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/components/forms/ContactForm';

vi.mock('@vercel/analytics', () => ({ track: vi.fn() }));
vi.mock('@/lib/gtm', () => ({ trackAuditRequest: vi.fn() }));

// Fills the required fields for a given locale so validation passes.
async function fillRequired(user: ReturnType<typeof userEvent.setup>, locale: 'fr' | 'en') {
  await user.type(screen.getByPlaceholderText(locale === 'fr' ? 'Votre nom' : 'Your name'), 'Alice');
  await user.type(
    screen.getByPlaceholderText(locale === 'fr' ? 'vous@entreprise.fr' : 'your@email.com'),
    'alice@test.com',
  );
  await user.type(
    screen.getByPlaceholderText(locale === 'fr' ? 'Décrivez votre projet, vos objectifs, vos questions…' : "Describe your business, your goals and what you're looking for in a website…"),
    'Un message de test suffisamment long.',
  );
}

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders FR copy by default, with Company/Phone optional and no offre marker', () => {
    render(<ContactForm />);
    expect(screen.getByText('Nom')).toBeInTheDocument();
    expect(screen.getAllByText('(optionnel)').length).toBeGreaterThan(0);
    expect(screen.getByPlaceholderText('Nom de votre entreprise')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('06 00 00 00 00')).not.toBeRequired();
    expect(screen.getByRole('button', { name: /Recevoir mon devis gratuit/i })).toBeInTheDocument();
  });

  it('renders EN copy with locale="en", Company/Phone optional, offre required', () => {
    render(<ContactForm locale="en" />);
    expect(screen.getByText('Full name')).toBeInTheDocument();
    expect(screen.getAllByText('(optional)').length).toBeGreaterThan(0);
    expect(screen.getByPlaceholderText('Your business name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+44 7700 900000')).not.toBeRequired();
    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
    expect(screen.getByRole('button', { name: /Send my request/i })).toBeInTheDocument();
  });

  it('blocks submission when required fields are empty (FR)', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole('button', { name: /Recevoir mon devis gratuit/i }));
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('submits successfully and shows the FR success message', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    const user = userEvent.setup();
    render(<ContactForm />);
    await fillRequired(user, 'fr');
    await user.click(screen.getByRole('button', { name: /Recevoir mon devis gratuit/i }));

    await waitFor(() => expect(screen.getByText('Message envoyé !')).toBeInTheDocument());
    expect(global.fetch).toHaveBeenCalledWith('/api/submit-lead', expect.objectContaining({ method: 'POST' }));
  });

  it('surfaces the server error message on FR when the API returns an error', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Trop de tentatives. Réessayez dans quelques minutes.' }),
    });
    const user = userEvent.setup();
    render(<ContactForm />);
    await fillRequired(user, 'fr');
    await user.click(screen.getByRole('button', { name: /Recevoir mon devis gratuit/i }));

    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent('Trop de tentatives. Réessayez dans quelques minutes.'),
    );
  });

  it('never surfaces the (French) server error message on EN — keeps its fixed English fallback', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Trop de tentatives. Réessayez dans quelques minutes.' }),
    });
    const user = userEvent.setup();
    render(<ContactForm locale="en" />);
    await fillRequired(user, 'en');
    await user.selectOptions(screen.getByRole('combobox'), 'creation');
    await user.click(screen.getByRole('button', { name: /Send my request/i }));

    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument());
    expect(screen.getByRole('alert')).not.toHaveTextContent('Trop de tentatives');
    expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong');
  });

  it('shows a locale-appropriate message on network failure', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('network down'));
    const user = userEvent.setup();
    render(<ContactForm locale="en" />);
    await fillRequired(user, 'en');
    await user.selectOptions(screen.getByRole('combobox'), 'creation');
    await user.click(screen.getByRole('button', { name: /Send my request/i }));

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Connection error'));
  });

  it('gives the submit button an accessible name while loading', async () => {
    let resolveFetch: (v: unknown) => void = () => {};
    (global.fetch as ReturnType<typeof vi.fn>).mockReturnValueOnce(
      new Promise((resolve) => { resolveFetch = resolve; }),
    );
    const user = userEvent.setup();
    render(<ContactForm />);
    await fillRequired(user, 'fr');
    const button = screen.getByRole('button', { name: /Recevoir mon devis gratuit/i });
    await user.click(button);

    await waitFor(() => expect(button).toHaveAccessibleName('Envoi en cours…'));
    resolveFetch({ ok: true, json: async () => ({ success: true }) });
  });
});
