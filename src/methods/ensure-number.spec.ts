import ensureNumber from './ensure-number';

describe('ensureNumber', () => {
  it('should throw error if number is passed', async () => {
    const fakeNumber = (<unknown>'123') as number;
    expect(() => ensureNumber(fakeNumber, 'string')).toThrow('Fields are not valid: [string]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeNumber = (<unknown>true) as number;
    expect(() => ensureNumber(fakeNumber, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeNumber = (<unknown>undefined) as number;
    expect(() => ensureNumber(fakeNumber, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if null is passed', async () => {
    const fakeNumber = (<unknown>null) as number;
    expect(() => ensureNumber(fakeNumber, 'null')).toThrow('Fields are not valid: [null]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeNumber = (<unknown>Symbol('foo')) as number;
    expect(() => ensureNumber(fakeNumber, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeNumber = (<unknown>{}) as number;
    expect(() => ensureNumber(fakeNumber, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeNumber = (<unknown>[]) as number;
    expect(() => ensureNumber(fakeNumber, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeString = (<unknown>new Date()) as number;
    expect(() => ensureNumber(fakeString, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should pass if number is passed', async () => {
    const realNumber = 10;
    expect(ensureNumber(realNumber, 'number')).toBe(realNumber);
  });
});
