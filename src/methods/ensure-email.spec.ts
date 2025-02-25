import ensureEmail from './ensure-email';

describe('ensureEmail', () => {
  it('should throw error if number is passed', async () => {
    const fakeString = (<unknown>1) as string;
    expect(() => ensureEmail(fakeString, 'number')).toThrow('Fields are not valid: [number]');
  });

  it('should throw error if boolean is passed', async () => {
    const fakeString = (<unknown>true) as string;
    expect(() => ensureEmail(fakeString, 'boolean')).toThrow('Fields are not valid: [boolean]');
  });

  it('should throw error if undefined is passed', async () => {
    const fakeString = (<unknown>undefined) as string;
    expect(() => ensureEmail(fakeString, 'undefined')).toThrow('Fields are not valid: [undefined]');
  });

  it('should throw error if null is passed', async () => {
    const fakeString = (<unknown>null) as string;
    expect(() => ensureEmail(fakeString, 'null')).toThrow('Fields are not valid: [null]');
  });

  it('should throw error if symbol is passed', async () => {
    const fakeString = (<unknown>Symbol('foo')) as string;
    expect(() => ensureEmail(fakeString, 'symbol')).toThrow('Fields are not valid: [symbol]');
  });

  it('should throw error if object is passed', async () => {
    const fakeString = (<unknown>{}) as string;
    expect(() => ensureEmail(fakeString, 'object')).toThrow('Fields are not valid: [object]');
  });

  it('should throw error if array is passed', async () => {
    const fakeString = (<unknown>[]) as string;
    expect(() => ensureEmail(fakeString, 'array')).toThrow('Fields are not valid: [array]');
  });

  it('should throw error if date is passed', async () => {
    const fakeString = (<unknown>new Date()) as string;
    expect(() => ensureEmail(fakeString, 'date')).toThrow('Fields are not valid: [date]');
  });

  it('should throw error if random string is passed', async () => {
    const realString = 'You shall pass!';
    expect(() => ensureEmail(realString, 'string')).toThrow('Fields are not valid: [string]');
  });

  it('should throw error if invalid email is passed', async () => {
    const email = 'test@tbdc';
    expect(() => ensureEmail(email, 'email')).toThrow('Fields are not valid: [email]');
  });

  it('should pass if real email is passed', async () => {
    const email = 'test@tbdc.com.br';
    expect(ensureEmail(email, 'email')).toBe(email);
  });
});
