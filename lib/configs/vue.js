const common = require('./common');
module.exports = {
  ...common,
  extends: [...common.extends, 'plugin:vue/essential', '@vue/prettier'],
};
