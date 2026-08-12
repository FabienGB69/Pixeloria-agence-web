/**
 * Génère un schema.org `BreadcrumbList` à partir des items du fil d'Ariane
 * visuel déjà rendu sur la page (`.breadcrumb` nav) — garde les deux en
 * synchronisation plutôt que de dupliquer la structure ailleurs (issue #149).
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbList(items: readonly BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
