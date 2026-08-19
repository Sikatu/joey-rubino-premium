export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

type BreadcrumbItem = {
  name: string;
  item: string;
};

export function createBreadcrumbJsonLd(
  items: readonly BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })
    ),
  };
}
