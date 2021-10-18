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
  extends: [...common.extends, 'react-app', 'react-app/jest'],
};
