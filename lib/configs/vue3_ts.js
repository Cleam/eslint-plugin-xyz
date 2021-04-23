const common = require('./common');
module.exports = {
  ...common,
  extends: [
    ...common.extends,
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
};
