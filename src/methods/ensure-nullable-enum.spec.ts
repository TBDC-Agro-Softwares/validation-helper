import ensureNullableEnum from './ensure-nullable-enum';

describe('ensureNullableEnum', () => {
  const defaultOptions = ['javascript', 'typescript'] as const;

  it('should throw error if number is passed', async () => {
    const fakeEnumOption = (<unknown>1) as 'javascript';
    expect(() => ensureNullableEnum(fakeEnumOption, defaultOptions, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if random string is passed', async () => {
    const fakeEnumOption = 'random-option';
    expect(() => ensureNullableEnum(fakeEnumOption, defaultOptions, 'random-string')).toThrow('Fields are not valid: [random-string]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeEnumOption = (<unknown>undefined) as 'javascript';
    expect(() => ensureNullableEnum(fakeEnumOption, defaultOptions, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeEnumOption = (<unknown>Symbol('foo')) as 'javascript';
    expect(() => ensureNullableEnum(fakeEnumOption, defaultOptions, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeEnumOption = (<unknown>{}) as 'javascript';
    expect(() => ensureNullableEnum(fakeEnumOption, defaultOptions, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeEnumOption = (<unknown>[]) as 'javascript';
    expect(() => ensureNullableEnum(fakeEnumOption, defaultOptions, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeEnumOption = (<unknown>new Date()) as 'javascript';
    expect(() => ensureNullableEnum(fakeEnumOption, defaultOptions, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should pass if null is passed', async () => {
    expect(ensureNullableEnum(null, defaultOptions, 'null')).toBe(null);
  });

  it('should pass if real option is passed', async () => {
    const realEnumOption = 'typescript';
    expect(ensureNullableEnum(realEnumOption, defaultOptions, 'enum-option')).toBe(realEnumOption);
  });
});
