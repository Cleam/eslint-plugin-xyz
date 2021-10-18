const common = require('./common');
module.exports = {
  ...common,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    'plugin:prettier/recommended',
  ],
};
