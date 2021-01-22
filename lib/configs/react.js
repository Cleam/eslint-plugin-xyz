const common = require('./common');
module.exports = {
  ...common,
  extends: [...common.extends, 'react-app', 'react-app/jest'],
};
