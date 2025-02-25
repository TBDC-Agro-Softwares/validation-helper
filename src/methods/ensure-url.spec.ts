import ensureUrl from './ensure-url';

describe('ensureUrl', () => {
  it('should throw error if number is passed', async () => {
    const fakeString = (<unknown>1) as string;
    expect(() => ensureUrl(fakeString, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeString = (<unknown>true) as string;
    expect(() => ensureUrl(fakeString, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeString = (<unknown>undefined) as string;
    expect(() => ensureUrl(fakeString, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if null is passed', async () => {
    const fakeString = (<unknown>null) as string;
    expect(() => ensureUrl(fakeString, 'null')).toThrow('Fields are not valid: [null]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeString = (<unknown>Symbol('foo')) as string;
    expect(() => ensureUrl(fakeString, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeString = (<unknown>{}) as string;
    expect(() => ensureUrl(fakeString, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeString = (<unknown>[]) as string;
    expect(() => ensureUrl(fakeString, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeString = (<unknown>new Date()) as string;
    expect(() => ensureUrl(fakeString, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should throw error if random string is passed', async () => {
    const realString = 'You shall pass!';
    expect(() => ensureUrl(realString, 'string')).toThrow('Fields are not valid: [string]');
  });

  it('should throw error if protocol is omitted', async () => {
    const url = 'tbdc.com.br';
    expect(() => ensureUrl(url, 'url')).toThrow('Fields are not valid: [url]');
  });

  it('should pass if real url is passed', async () => {
    const url = 'https://tbdc.com.br';
    expect(ensureUrl(url, 'url')).toBe(url);
  });
});
