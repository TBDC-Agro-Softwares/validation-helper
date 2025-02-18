import ensureDate from './ensure-date';

describe('ensureDate', () => {
  it('should throw error if number is passed', async () => {
    const fakeDate = (<unknown>1) as Date;
    expect(() => ensureDate(fakeDate, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeDate = (<unknown>true) as Date;
    expect(() => ensureDate(fakeDate, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeDate = (<unknown>undefined) as Date;
    expect(() => ensureDate(fakeDate, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if null is passed', async () => {
    const fakeDate = (<unknown>null) as Date;
    expect(() => ensureDate(fakeDate, 'null')).toThrow('Fields are not valid: [null]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeDate = (<unknown>Symbol('foo')) as Date;
    expect(() => ensureDate(fakeDate, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeDate = (<unknown>{}) as Date;
    expect(() => ensureDate(fakeDate, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeDate = (<unknown>[]) as Date;
    expect(() => ensureDate(fakeDate, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if string is passed', async () => {
    const fakeDate = (<unknown>'Yahoo') as Date;
    expect(() => ensureDate(fakeDate, 'string')).toThrow('Fields are not valid: [string]');
  });

  it('should pass if date as string is passed', async () => {
    const realDateString = '2025-02-18';
    expect(ensureDate(realDateString, 'dateString')).toStrictEqual(new Date(realDateString));
  });

  it('should pass if date instance is passed', async () => {
    const realDateString = new Date('2025-02-18');
    expect(ensureDate(realDateString, 'date')).toStrictEqual(realDateString);
  });
});
