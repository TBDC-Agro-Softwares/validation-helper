export default class ValidationHelperError {
    message: string;
    name: string;
    fields: Array<string | number | symbol>;
    constructor(fields: Array<string | number | symbol>);
}
