// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestimonialForm from '@/components/forms/TestimonialForm';

async function fillRequired(user: ReturnType<typeof userEvent.setup>, locale: 'fr' | 'en') {
  const copy = locale === 'fr'
    ? { prenom: 'Votre prénom', activite: 'Ex : Plombier, Électricien, Couvreur…', ville: 'Ex : Lyon, Villeurbanne…', avis: /Qu'est-ce que vous avez aimé/ }
    : { prenom: 'Your first name', activite: 'e.g. Plumber, Electrician, Painter…', ville: 'e.g. Lyon, Grenoble, London…', avis: /What did you enjoy most/ };

  await user.type(screen.getByPlaceholderText(copy.prenom), 'Marie');
  await user.type(screen.getByPlaceholderText(copy.activite), 'Peintre');
  await user.type(screen.getByPlaceholderText(copy.ville), 'Lyon');
  await user.type(screen.getByPlaceholderText(copy.avis), 'Un avis suffisamment long pour passer la validation.');
  await user.click(screen.getByRole('checkbox'));
}

describe('TestimonialForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('remaps FR field names onto the canonical API payload and shows the success message', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    const user = userEvent.setup();
    render(<TestimonialForm />);
    await fillRequired(user, 'fr');
    await user.click(screen.getByRole('button', { name: /Envoyer mon avis/i }));

    await waitFor(() => expect(screen.getByText('Merci Marie !')).toBeInTheDocument());

    const [, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    const body = JSON.parse((options as RequestInit).body as string);
    expect(body).toMatchObject({ prenom: 'Marie', activite: 'Peintre', ville: 'Lyon', note: '5' });
    expect(body._lang).toBeUndefined();
  });

  it('remaps EN field names (firstName/trade/city/review) onto the same canonical payload', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    const user = userEvent.setup();
    render(<TestimonialForm locale="en" />);
    await fillRequired(user, 'en');
    await user.click(screen.getByRole('button', { name: /Submit my review/i }));

    await waitFor(() => expect(screen.getByText('Thank you, Marie!')).toBeInTheDocument());

    const [, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    const body = JSON.parse((options as RequestInit).body as string);
    expect(body).toMatchObject({ prenom: 'Marie', activite: 'Peintre', ville: 'Lyon', _lang: 'en' });
  });

  it('shows the API error message when submission fails', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Vérification de sécurité échouée.' }),
    });
    const user = userEvent.setup();
    render(<TestimonialForm />);
    await fillRequired(user, 'fr');
    await user.click(screen.getByRole('button', { name: /Envoyer mon avis/i }));

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Vérification de sécurité échouée.'));
  });
});
