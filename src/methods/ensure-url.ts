import { z } from 'zod';
import ValidationHelperError from '../ValidationHelperError';

export default function ensureUrl(url: string, field: string): string {
  const result = z.string().url().safeParse(url);
  if (!result.success) throw new ValidationHelperError([field]);
  return result.data;
}
