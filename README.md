# eslint-plugin-xyz

一个统一的代码规范集合 eslint 插件，可以用于一般项目以及 vue、react、node 项目。

## 安装

首先，安装 [ESLint](http://eslint.org) 、`eslint-plugin-xyz`和`@babel/eslint-parser`:

```bash
npm install --save-dev eslint eslint-plugin-xyz @babel/eslint-parser
```

**注意:** 如果你全局安装了`eslint` (使用 `-g` 参数) 那么也必须全局安装 `eslint-plugin-xyz`.

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

1. 安装

```bash
npm install --save-dev eslint-plugin-vue @vue/eslint-config-prettier @vue/eslint-config-typescript
```

2. 引入配置

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

1. 安装

```bash
npm install --save-dev eslint-config-react-app @typescript-eslint/eslint-plugin@^4.0.0 @typescript-eslint/parser@^4.0.0 babel-eslint@^10.0.0 eslint@^7.5.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8
```

2. 引入配置

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

## 支持的规则说明

- `common`: 继承自`eslint:recommended` 和 `plugin:prettier/recommended`
- `vue`: 继承自`common` rules 以及 `plugin:vue/essential`, `@vue/prettier`
- `vue3`: 继承自`common` rules 以及 `plugin:vue/vue3-essential`, `@vue/prettier`
- `vue3_ts`: 继承自`common` rules 以及 `plugin:vue/vue3-essential`, `@vue/prettier`
- `react`: 继承自`common` rules 以及 `react-app`, `react-app/jest`
- `node`: 继承自`common` rules

一些自定义规则:

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
