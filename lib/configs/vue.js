const common = require('./common');
module.exports = {
  ...common,
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/prettier',
    'plugin:prettier/recommended',
  ],
};
