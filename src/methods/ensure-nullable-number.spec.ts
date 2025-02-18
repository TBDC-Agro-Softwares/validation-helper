import ensureNullableNumber from './ensure-nullable-number';

describe('ensureNullableNumber', () => {
  it('should throw error if number is passed', async () => {
    const fakeNumber = (<unknown>'123') as number;
    expect(() => ensureNullableNumber(fakeNumber, 'string')).toThrow('Fields are not valid: [string]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeNumber = (<unknown>true) as number;
    expect(() => ensureNullableNumber(fakeNumber, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeNumber = (<unknown>undefined) as number;
    expect(() => ensureNullableNumber(fakeNumber, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeNumber = (<unknown>Symbol('foo')) as number;
    expect(() => ensureNullableNumber(fakeNumber, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeNumber = (<unknown>{}) as number;
    expect(() => ensureNullableNumber(fakeNumber, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeNumber = (<unknown>[]) as number;
    expect(() => ensureNullableNumber(fakeNumber, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeString = (<unknown>new Date()) as number;
    expect(() => ensureNullableNumber(fakeString, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should pass if null is passed', async () => {
    expect(ensureNullableNumber(null, 'null')).toBe(null);
  });

  it('should pass if string is passed', async () => {
    const realNumber = 10;
    expect(ensureNullableNumber(realNumber, 'number')).toBe(realNumber);
  });
});
