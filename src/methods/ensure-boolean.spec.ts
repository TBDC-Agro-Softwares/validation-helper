import ensureBoolean from './ensure-boolean';

describe('ensureBoolean', () => {
  it('should throw error if number is passed', async () => {
    const fakeBoolean = (<unknown>1) as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if string is passed', async () => {
    const fakeBoolean = (<unknown>'true') as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'string')).toThrow('Fields are not valid: [string]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeBoolean = (<unknown>undefined) as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if null is passed', async () => {
    const fakeBoolean = (<unknown>null) as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'null')).toThrow('Fields are not valid: [null]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeBoolean = (<unknown>Symbol('foo')) as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeBoolean = (<unknown>{}) as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeBoolean = (<unknown>[]) as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeBoolean = (<unknown>new Date()) as boolean;
    expect(() => ensureBoolean(fakeBoolean, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should pass if boolean is passed', async () => {
    const realBoolean = true;
    expect(ensureBoolean(realBoolean, 'boolean')).toBe(realBoolean);
  });
});
