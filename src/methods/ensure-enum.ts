import ValidationHelperError from '../ValidationHelperError';

export default function ensureEnum<T extends string>(value: T, options: readonly T[], field: string): T {
  if (options.indexOf(value) === -1) throw new ValidationHelperError([field]);
  return value;
}
