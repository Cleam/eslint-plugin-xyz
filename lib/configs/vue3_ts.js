const common = require('./common');
module.exports = {
  ...common,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // 支持es6模块语法
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
};
