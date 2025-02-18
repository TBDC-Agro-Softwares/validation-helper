export default class ValidationHelperError {
  public message: string;
  public name: string;
  public fields: Array<string | number | symbol>;

  constructor(fields: Array<string | number | symbol>) {
    this.fields = fields;
    this.message = `Fields are not valid: [${fields.join(', ')}]`;
    this.name = new.target.name;
  }
}
