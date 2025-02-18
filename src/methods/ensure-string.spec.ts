import ensureString from './ensure-string';

describe('ensureString', () => {
  it('should throw error if number is passed', async () => {
    const fakeString = (<unknown>1) as string;
    expect(() => ensureString(fakeString, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeString = (<unknown>true) as string;
    expect(() => ensureString(fakeString, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeString = (<unknown>undefined) as string;
    expect(() => ensureString(fakeString, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if null is passed', async () => {
    const fakeString = (<unknown>null) as string;
    expect(() => ensureString(fakeString, 'null')).toThrow('Fields are not valid: [null]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeString = (<unknown>Symbol('foo')) as string;
    expect(() => ensureString(fakeString, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeString = (<unknown>{}) as string;
    expect(() => ensureString(fakeString, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeString = (<unknown>[]) as string;
    expect(() => ensureString(fakeString, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeString = (<unknown>new Date()) as string;
    expect(() => ensureString(fakeString, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should pass if string is passed', async () => {
    const realString = 'You shall pass!';
    expect(ensureString(realString, 'string')).toBe(realString);
  });
});
