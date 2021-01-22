const common = require('./common');
module.exports = {
  ...common,
  extends: [...common.extends, 'plugin:vue/vu3-essential', '@vue/prettier'],
};
