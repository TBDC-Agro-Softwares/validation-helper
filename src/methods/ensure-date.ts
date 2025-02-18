import { z } from 'zod';

import ValidationHelperError from '../ValidationHelperError';

export default function ensureDate(date: Date | string, field: string): Date {
  if ((typeof date !== 'string' && typeof date !== 'object') || date === null) throw new ValidationHelperError([field]);
  const parsed = z.union([z.string(), z.date()]).pipe(z.coerce.date()).safeParse(date);
  if (!parsed.success) throw new ValidationHelperError([field]);
  return parsed.data;
}
