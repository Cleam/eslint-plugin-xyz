# eslint-plugin-xyz

A general eslint plugin with [prettier](https://prettier.io/). It can help you unify the code style and can be used in `common`, `node`, `vue`, `react` project.

[简体中文文档](./CN.md)

## install

install [ESLint](http://eslint.org) and `eslint-plugin-xyz`:

```bash
npm install --save-dev eslint eslint-plugin-xyz
```

**Note:** you must install `eslint-plugin-xyz` globally, If you install `eslint` globally (using the `-g` parameter).

## usage

for `common` project:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/common"]
}
```

for `vue` project: ()

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue"]
}
```

```bash
npm install --save-dev eslint-plugin-vue @vue/eslint-config-prettier
```

for `vue3` project: ()

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue3"]
}
```

```bash
npm install --save-dev eslint-plugin-vue @vue/eslint-config-prettier
```

for `react` project:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/react"]
}
```

```bash
npm install --save-dev eslint-config-react-app @typescript-eslint/eslint-plugin@^4.0.0 @typescript-eslint/parser@^4.0.0 babel-eslint@^10.0.0 eslint@^7.5.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8
```

for `node` project:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/node"]
}
```

## rules

- `common`: extends `eslint:recommended` and `plugin:prettier/recommended`
- `vue`: extends `common` rules with `plugin:vue/essential`, `@vue/prettier`
- `vue3`: extends `common` rules with `plugin:vue/vue3-essential`, `@vue/prettier`
- `react`: extends `common` rules with `react-app`, `react-app/jest`
- `node`: extends `common` rules

custom rules:

```json
{
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 2,
        "semi": true
      }
    ],
    "no-console": "off"
  }
}
```