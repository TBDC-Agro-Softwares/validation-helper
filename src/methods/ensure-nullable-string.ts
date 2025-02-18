import ensureString from './ensure-string';

export default function ensureNullableString(string: string | null, field: string): string | null {
  if (string === null) return string;
  return ensureString(string, field);
}
