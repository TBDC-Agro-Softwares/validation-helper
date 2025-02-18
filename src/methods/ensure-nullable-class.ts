import ensureClass, { type IEntity } from './ensure-class';

export default function ensureNullableClass<T extends IEntity | null, K>(relation: T, constructor: { new (...args: K[]): T }, field: string): T {
  if (relation === null) return relation;
  return ensureClass(relation, constructor as { new (...args: K[]): IEntity }, field) as T;
}
