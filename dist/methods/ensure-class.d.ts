export interface IEntity {
    id: number;
}
export default function ensureClass<T extends IEntity, K>(relation: T, constructor: {
    new (...args: K[]): T;
}, field: string): T;
