/** Truncate copy for meta descriptions (aim under ~160 chars). */
export function truncateDescription(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const sliced = normalized.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  const base = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;
  return `${base.trimEnd()}…`;
}
