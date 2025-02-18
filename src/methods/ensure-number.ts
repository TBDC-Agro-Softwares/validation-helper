import ValidationHelperError from '../ValidationHelperError';

export default function ensureNumber(number: number, field: string): number {
  if (typeof number !== 'number' || (!number && number !== 0)) throw new ValidationHelperError([field]);
  return number;
}
