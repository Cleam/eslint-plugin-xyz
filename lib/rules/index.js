// const prettierConfig = require('./prettier-config');

module.exports = {
  // 'prettier/prettier': ['error', prettierConfig],
};

/**
{
  "extends": ["plugin:prettier/recommended"]
}

等价于下面：

{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}

来源：https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
 */
