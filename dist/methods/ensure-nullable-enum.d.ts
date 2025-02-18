export default function ensureNullableEnum<T extends string>(value: T | null, options: readonly T[], field: string): T | null;
