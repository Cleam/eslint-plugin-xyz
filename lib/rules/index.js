const prettierConfig = require('./prettier-config');

module.exports = {
  'prettier/prettier': ['error', prettierConfig],
  'arrow-body-style': 'off',
  'prefer-arrow-callback': 'off',
  'no-console': 'off',
};
