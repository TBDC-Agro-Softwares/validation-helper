import { type z } from 'zod';
import ValidationHelperError from '../ValidationHelperError';

export default function ensureObject<T extends object>(objectValue: T, validationSchema: z.ZodSchema<T>, field: string): T {
  const parsed = validationSchema.safeParse(objectValue);
  if (!parsed.success) throw new ValidationHelperError([field]);
  return parsed.data;
}
