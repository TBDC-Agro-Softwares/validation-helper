import ValidationHelperError from '../ValidationHelperError';

export default function ensureString(string: string, field: string): string {
  if (typeof string !== 'string' || !string) throw new ValidationHelperError([field]);
  return string;
}
