import ensureDate from './ensure-date';

export default function ensureNullableDate(date: Date | string | null, field: string): Date | null {
  if (date === null) return null;
  return ensureDate(date, field);
}
