# eslint-plugin-xyz

[中文](./README.md) | English

A unified code specification collection that is a eslint plug-in can be used for vanilla, vue, react, and node projects.

## install

```bash
npm install --save-dev eslint eslint-plugin-xyz prettier eslint-plugin-prettier eslint-config-prettier
```

**Notice**：Try to use `--legacy-peer-deps` when `npm >= 7`, or you find an error like `Could not resolve dependency: peer eslint@">=7.x.x" ...`。

## usage

Add `xyz` to the `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.

### for vanilla project

```sh
npm i --save-dev @babel/{core,eslint-parser}
```

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/common"]
}
```

### for vue project

```bash
npm install --save-dev @babel/{core,eslint-parser} eslint-plugin-vue @vue/eslint-config-prettier
```

`vue2`:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue"]
}
```

`vue3`:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue3"]
}
```

### for vue3 and ts project

```sh
npm i --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @vue/eslint-config-typescript @vue/eslint-config-prettier @vue/eslint-config-typescript eslint-plugin-vue
```

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue3_ts"]
}
```

### for react and ts project

```bash
npm i --save-dev typescript eslint-config-react-app @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks babel-eslint
```

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/react"]
}
```

### for node project

```sh
npm i --save-dev @babel/{core,eslint-parser}
```

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/node"]
}
```

## an usage example of vue 2 project

```js
// .eslintrc.js
module.exports = {
  root: true,
  plugins: ['xyz'],
  extends: ['plugin:xyz/vue'],
  rules: {
    'no-console': process.env.VUE_APP_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.VUE_APP_ENV === 'production' ? 'warn' : 'off',
  },
};
```

```js
// .prettierrc.js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: ['*.md'],
      options: { parser: 'markdown' },
    },
    {
      files: '*.json',
      options: { parser: 'json' },
    },
    {
      files: ['*.css', '*.scss', '*.less'],
      options: { singleQuote: false },
    },
    {
      files: '*.scss',
      options: { parser: 'scss' },
    },
    {
      files: '*.less',
      options: { parser: 'less' },
    },
    {
      files: '*.vue',
      options: { parser: 'vue' },
    },
    {
      files: ['*.js', '*.jsx'],
      options: { parser: 'babel' },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: { parser: 'babel-ts' },
    },
  ],
};
```

> You can add `.eslintignore` and `.prettierignore `files to ignore files that do not need to be verified according to business needs.

add `lint:js: "eslint --ext .js,.vue,.jsx,.tsx src --cache --cache-location \"./node_modules/.cache/.eslintcache\""` in `package.json`.

> Reference：[eslint](https://eslint.org/)、[prettier](https://prettier.io/)

## rules description

- `common`: extends `eslint:recommended` and `plugin:prettier/recommended`
- `vue`: extends `common` rules and `plugin:vue/essential`, `@vue/prettier`
- `vue3`: extends `common` rules and `plugin:vue/vue3-essential`, `@vue/prettier`
- `vue3_ts`: extends `common` rules and `plugin:vue/vue3-essential`, `@vue/typescript/recommended`, `@vue/prettier/@typescript-eslint`, `@vue/prettier`
- `react`: extends `common` rules and `react-app`, `react-app/jest`
- `node`: extends `common` rules

## illustrate

This plugin will always be maintained. Welcome to discuss.
