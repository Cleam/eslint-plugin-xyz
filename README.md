# eslint-plugin-xyz

A general eslint plugin with [prettier](https://prettier.io/). It can help you unify the code style and can be used in `common`, `node`, `vue`, `react` project.

[简体中文文档](./README.cn.md)

## install

install [ESLint](http://eslint.org) and `eslint-plugin-xyz`:

```bash
npm install eslint eslint-plugin-xyz --save-dev
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

for `vue3` project: ()

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue3"]
}
```

for `react` project:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/react"]
}
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
