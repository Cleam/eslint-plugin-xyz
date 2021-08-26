const common = require('./common');
const rules = require('../rules');
const prettierConfig = require('../rules/prettier-config');
module.exports = {
  ...common,
  extends: [...common.extends, 'plugin:vue/vue3-essential', '@vue/prettier'],
  rules: {
    ...rules,
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
        parser: 'vue',
      },
    ],
  },
};
