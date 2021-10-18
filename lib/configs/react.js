const common = require('./common');
module.exports = {
  ...common,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // 支持es6模块语法
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
  ],
};
