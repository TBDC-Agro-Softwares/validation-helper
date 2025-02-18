import ValidationHelperError from '../ValidationHelperError';

export default function ensureBoolean(boolean: boolean, field: string) {
  if (typeof boolean !== 'boolean' || boolean === null || boolean === undefined) {
    throw new ValidationHelperError([field]);
  }
  return boolean;
}
