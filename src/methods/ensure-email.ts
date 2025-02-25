import { z } from 'zod';
import ValidationHelperError from '../ValidationHelperError';

export default function ensureEmail(email: string, field: string): string {
  const result = z.string().email().safeParse(email);
  if (!result.success) throw new ValidationHelperError([field]);
  return result.data;
}
