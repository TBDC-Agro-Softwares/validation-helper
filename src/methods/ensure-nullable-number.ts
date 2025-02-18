import ensureNumber from './ensure-number';

export default function ensureNullableNumber(number: number | null, field: string): number | null {
  if (number === null) return number;
  return ensureNumber(number, field);
}
