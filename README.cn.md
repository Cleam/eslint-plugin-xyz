# eslint-plugin-xyz

一个统一的代码规范集合 eslint 插件，可以用于一般项目以及 vue、react、node 项目。

## 安装

首先，安装 [ESLint](http://eslint.org) 和 `eslint-plugin-xyz`:

```bash
npm install eslint eslint-plugin-xyz --save-dev
```

**注意:** 如果你全局安装了`eslint` (使用 `-g` 参数) 那么也必须全局安装 `eslint-plugin-xyz`.

## 使用

将 `xyz` 添加到 `.eslintrc` 配置文件.可以省略 `eslint-plugin-` 前缀:

一般项目的使用：:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/common"]
}
```

`vue`项目的使用:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue"]
}
```

`vue3`项目的使用:

```json
{
  "plugins": ["xyz"],
  "extends": ["plugin:xyz/vue3"]
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

- `common`: 继承自`eslint:recommended` 和 `plugin:prettier/recommended`
- `vue`: 继承自`common` rules 以及 `plugin:vue/essential`, `@vue/prettier`
- `vue3`: 继承自`common` rules 以及 `plugin:vue/vue3-essential`, `@vue/prettier`
- `react`: 继承自`common` rules 以及 `react-app`, `react-app/jest`
- `node`: 继承自`common` rules

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
