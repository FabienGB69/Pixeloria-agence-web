// Lit les UTM params de l'URL et les stocke en sessionStorage.
// À appeler côté client au chargement de la page.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

export function captureUtm(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) sessionStorage.setItem(key, val);
  });
}

export function getStoredUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  return Object.fromEntries(
    UTM_KEYS.map((key) => [key, sessionStorage.getItem(key) ?? '']).filter(([, v]) => v)
  );
}
