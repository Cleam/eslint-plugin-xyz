# eslint-plugin-xyz

序言泽前端代码规则（结合 `eslint` 和 [prettier](https://prettier.io/)），主要使用了 `eslint` 和 `prettier` 推荐的默认规则，加极少量的自定义规则。

## 安装

首先，安装 [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

然后，安装 `eslint-plugin-xyz`:

```bash
npm install eslint-plugin-xyz --save-dev
```

**注意:** 如果你全局安装了`eslint` (使用 `-g` 参数) 那么也必须全局安装 `eslint-plugin-xyz`.

## 使用

将 `xyz` 添加到 `.eslintrc` 配置文件.可以省略 `eslint-plugin-` 前缀:

一般项目（如`shfe-cli`脚手架项目）的使用：:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/recommended"]
}
```

`vue`项目的使用:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue"]
}
```

`react`项目的使用:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/react"]
}
```

`node`项目的使用:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/node"]
}
```

## 支持的规则说明

自定义规则:

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

- `recommended`: 继承自 `eslint:recommended` 和 `plugin:prettier/recommended` 加上上面的自定义规则
- `vue`: 继承自 `plugin:vue/essential`, `eslint:recommended`, `@vue/prettier` 和 `plugin:prettier/recommended` 加上上面的自定义规则
- `react`: 继承自 `eslint:recommended`, `react-app`, `react-app/jest` 和 `plugin:prettier/recommended`加上上面的自定义规则
- `node`: 继承自 `eslint:recommended` 和 `plugin:prettier/recommended`加上上面的自定义规则
