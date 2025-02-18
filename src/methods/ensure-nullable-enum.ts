import ensureEnum from './ensure-enum';

export default function ensureNullableEnum<T extends string>(value: T | null, options: readonly T[], field: string): T | null {
  if (value === null) return null;
  return ensureEnum(value, options, field);
}
