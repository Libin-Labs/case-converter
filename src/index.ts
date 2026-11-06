export type CaseStyle = 'camel' | 'pascal' | 'snake' | 'kebab';
export function convertCase(input: string, style: CaseStyle): string {
  if (typeof input !== 'string') throw new TypeError('Expected text');
  if (!['camel', 'pascal', 'snake', 'kebab'].includes(style))
    throw new RangeError('Unsupported case style');
  const words =
    input
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .match(/[\p{L}\p{N}]+/gu) ?? [];
  const lower = words.map((word) => word.toLocaleLowerCase('en'));
  if (style === 'snake') return lower.join('_');
  if (style === 'kebab') return lower.join('-');
  const title = lower.map((word) => word.charAt(0).toLocaleUpperCase('en') + word.slice(1));
  return style === 'pascal' ? title.join('') : (lower[0] ?? '') + title.slice(1).join('');
}
