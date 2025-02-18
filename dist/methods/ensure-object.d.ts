import { type z } from 'zod';
export default function ensureObject<T extends object>(objectValue: T, validationSchema: z.ZodSchema<T>, field: string): T;
