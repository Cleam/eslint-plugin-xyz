const rules = require('../rules');
module.exports = {
  // 环境配置（根据实际情况做取舍）
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    // 支持babel的使用
    // parser: 'babel-eslint',  //! babel-eslint 已经停止维护，改用@babel/eslint-parser。
    parser: '@babel/eslint-parser',  // for js pro
    // 支持es6模块语法
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  // 继承eslint的默认配置和prettier的配置。
  extends: ['eslint:recommended', 'prettier'],
  // 自定义规则（优先级最高）
  rules,
};
