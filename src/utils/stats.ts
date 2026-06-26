export function countBy<T extends string>(
  items: { [K in T]: string }[],
  key: T,
): Record<string, number> {
  return items.reduce<Record<string, number>>((acc, item) => {
    const value = item[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

export function topEntries(
  counts: Record<string, number>,
  n: number,
): [string, number][] {
  return Object.entries(counts).sort(([, a], [, b]) => b - a).slice(0, n);
}