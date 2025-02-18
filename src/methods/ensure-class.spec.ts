import ensureClass from './ensure-class';

class TestClass {
  id: number;
  name: string;

  constructor(props: { id: number; name: string }) {
    this.id = props.id;
    this.name = props.name;
  }
}

describe('ensureClass', () => {
  it('should throw error if number is passed', async () => {
    const fakeClass = (<unknown>1) as TestClass;
    expect(() => ensureClass(fakeClass, TestClass, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeClass = (<unknown>true) as TestClass;
    expect(() => ensureClass(fakeClass, TestClass, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeClass = (<unknown>undefined) as TestClass;
    expect(() => ensureClass(fakeClass, TestClass, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if null is passed', async () => {
    const fakeClass = (<unknown>null) as TestClass;
    expect(() => ensureClass(fakeClass, TestClass, 'null')).toThrow('Fields are not valid: [null]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeClass = (<unknown>Symbol('foo')) as TestClass;
    expect(() => ensureClass(fakeClass, TestClass, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeClass = { id: 1, name: 'Real' };
    expect(() => ensureClass(fakeClass, TestClass, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeClass = (<unknown>[]) as TestClass;
    expect(() => ensureClass(fakeClass, TestClass, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeClass = (<unknown>new Date()) as TestClass;
    expect(() => ensureClass(fakeClass, TestClass, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should pass if valid instance of class is passed', async () => {
    const realString = new TestClass({ id: 1, name: 'Real' });

    const result = ensureClass(realString, TestClass, 'string');
    expect(result).toBe(realString);
    expect(result).toBeInstanceOf(TestClass);
    expect(result.id).toStrictEqual(1);
    expect(result.name).toStrictEqual('Real');
  });
});
