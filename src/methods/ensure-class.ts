import ValidationHelperError from '../ValidationHelperError';

export interface IEntity {
  id: number;
}

export default function ensureClass<T extends IEntity, K>(relation: T, constructor: { new (...args: K[]): T }, field: string): T {
  if (!(relation instanceof constructor) || !relation) throw new ValidationHelperError([field]);
  if (relation instanceof constructor && !relation.id) throw new ValidationHelperError([`${field}.id`]);
  return relation;
}
