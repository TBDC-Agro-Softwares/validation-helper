import { type IEntity } from './ensure-class';
export default function ensureNullableClass<T extends IEntity | null, K>(relation: T, constructor: {
    new (...args: K[]): T;
}, field: string): T;
