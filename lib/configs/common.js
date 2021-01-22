module.exports = {
  // 环境配置（根据实际情况做取舍）
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    // 支持babel的使用
    parser: 'babel-eslint',
    // 支持es6模块语法
    sourceType: 'module',
  },
  // 继承eslint的默认配置和prettier的配置。
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // 自定义规则（优先级最高）
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        semi: true,
      },
    ],
    'no-console': 'off',
  },
};
