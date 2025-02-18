import ensureNullableString from './ensure-nullable-string';

describe('ensureNullableString', () => {
  it('should throw error if number is passed', async () => {
    const fakeString = (<unknown>1) as string;
    expect(() => ensureNullableString(fakeString, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeString = (<unknown>true) as string;
    expect(() => ensureNullableString(fakeString, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeString = (<unknown>undefined) as string;
    expect(() => ensureNullableString(fakeString, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeString = (<unknown>Symbol('foo')) as string;
    expect(() => ensureNullableString(fakeString, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeString = (<unknown>{}) as string;
    expect(() => ensureNullableString(fakeString, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeString = (<unknown>[]) as string;
    expect(() => ensureNullableString(fakeString, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeString = (<unknown>new Date()) as string;
    expect(() => ensureNullableString(fakeString, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should pass if null is passed', async () => {
    expect(ensureNullableString(null, 'null')).toBe(null);
  });

  it('should pass if string is passed', async () => {
    const realString = 'You shall pass!';
    expect(ensureNullableString(realString, 'string')).toBe(realString);
  });
});
