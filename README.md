<p align="center">
  <a href="https://tbdc.com.br/" target="_blank">
    <img width="150" src="docs/assets/logo.svg" alt="TBDC logo">
  </a>
</p>

---

<p align="center">
  <em>A set of methods to help the validation of any primitive or non-primitive value with TS</em>
</p>

## Installation

```bash
npm install @tbdc-agro-softwares/validation-helper
## or
yarn add @tbdc-agro-softwares/validation-helper
## or
pnpm add @tbdc-agro-softwares/validation-helper
```


## Usage

### Relative import
```ts
import { ensureBoolean, ensureString } from '@tbdc-agro-softwares/validation-helper';

ensureBoolean(true, 'field') // returns true
ensureBoolean('true', 'field') // throws ValidationError
ensureString('valid string', 'field') // returns 'valid string'
ensureString(Symbol('not a string'), 'field') // throws ValidationError
```

### Absolute import
```ts
import ensureBoolean from '@tbdc-agro-softwares/ensure-boolean';
import ensureString from '@tbdc-agro-softwares/ensure-string';

ensureBoolean(true, 'field') // returns true
ensureBoolean('true', 'field') // throws ValidationError
ensureString('valid string', 'field') // returns 'valid string'
ensureString(Symbol('not a string'), 'field') // throws ValidationError
```

## Available Methods

🚧 Documentation in progress... (Help is needed)


```ts
function ensureString(string: string, field: string): string;
```

```ts
function ensureNullableString(string: string | null, field: string): string | null;
```

```ts
function ensureNumber(number: number, field: string): number;
```

```ts
function ensureNullableNumber(number: number | null, field: string): number | null;
```

```ts
function ensureBoolean(boolean: boolean, field: string): boolean;
```

```ts
function ensureClass<T extends { id: number; }, K>(relation: T, constructor: { new (...args: K[]): T; }, field: string): T;
```

```ts
function ensureNullableClass<T extends { id: number; } | null, K>(relation: T, constructor: { new (...args: K[]): T; }, field: string): T;
```

```ts
function ensureDate(date: Date | string, field: string): Date
```

```ts
function ensureNullableDate(date: Date | string | null, field: string): Date | null;
```

```ts
function ensureEnum<T extends string>(value: T, options: readonly T[], field: string): T;
```

```ts
function ensureNullableEnum<T extends string>(value: T | null, options: readonly T[], field: string): T | null;
```

```ts
function ensureObject<T extends object>(objectValue: T, validationSchema: ZodSchema<T>, field: string): T;
```
> For more information see [zod documentation](https://github.com/colinhacks/zod)

---


## Contributors

<a href="mailto:mauro.olveira@tbdc.com.br" target="_blank">
  <img src="https://img.shields.io/badge/Mauro%20Oliveira-Contribuindo-3c6518.svg">
</a><br/>
