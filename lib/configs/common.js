const rules = require('../rules');
module.exports = {
  // 环境配置（根据实际情况做取舍）
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    // 支持babel的使用
    // parser: 'babel-eslint',  //! babel-eslint 已经停止维护，改用@babel/eslint-parser。
    parser: '@babel/eslint-parser',
    // 支持es6模块语法
    sourceType: 'module',
  },
  // 继承eslint的默认配置和prettier的配置。
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // 自定义规则（优先级最高）
  rules,
};
