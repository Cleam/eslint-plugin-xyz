# eslint-plugin-xyz

一个统一的代码规范集合 eslint 插件，可以用于一般项目以及 vue、react、node 项目。

## 安装

```bash
npm install --save-dev eslint eslint-plugin-xyz @babel/{core,eslint-parser}
npm install --save-dev --save-exact prettier
```

**注意**：如果碰到安装错误`Could not resolve dependency: peer eslint@">=7.x.x" ...`时，可以尝试加参数`--legacy-peer-deps`安装。

## 使用

将 `xyz` 添加到 `.eslintrc` 配置文件.可以省略 `eslint-plugin-` 前缀:

### 普通项目使用

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/common"]
}
```

### vue 项目使用

- 安装

```bash
npm install --save-dev eslint-plugin-vue @vue/eslint-config-prettier @vue/eslint-config-typescript eslint-plugin-prettier
```

- 引入配置

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

`vue3 + ts`:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue3_ts"]
}
```

### react 项目的使用

- 安装

```bash
npm install --save-dev eslint-config-react-app @typescript-eslint/eslint-plugin@^4.0.0 @typescript-eslint/parser@^4.0.0 babel-eslint@^10.0.0 eslint@^7.5.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8
```

- 引入配置

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/react"]
}
```

### node 项目的使用

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/node"]
}
```

## 配置示例（vue2 项目）

```js
// .eslintrc.js
module.exports = {
  root: true,
  plugins: ['xyz'],
  extends: ['plugin:xyz/vue'],
  parserOptions: {
    ecmaVersion: 2020,
  },
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
  jsxBracketSameLine: false,
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

> 可以自行根据业务需求，增加.eslintignore 和 .prettierignore 文件忽略掉不需要校验的文件。

在`package.json`中配置`lint:js: "eslint --ext .js,.vue,.jsx,.tsx src --cache --cache-location \"./node_modules/.cache/.eslintcache\""`

> 参考学习：[eslint](https://eslint.org/)、[prettier](https://prettier.io/)

## 支持的规则说明

- `common`: 继承自`eslint:recommended` 和 `plugin:prettier/recommended`
- `vue`: 继承自`common` rules 以及 `plugin:vue/essential`, `@vue/prettier`
- `vue3`: 继承自`common` rules 以及 `plugin:vue/vue3-essential`, `@vue/prettier`
- `vue3_ts`: 继承自`common` rules 以及 `plugin:vue/vue3-essential`, `@vue/prettier`
- `react`: 继承自`common` rules 以及 `react-app`, `react-app/jest`
- `node`: 继承自`common` rules

## 说明

目前只有 react 项目和 ts 项目实践较少，所以难免会有一些问题，本插件也会不定期更新。
