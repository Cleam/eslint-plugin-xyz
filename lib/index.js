/**
 * @fileoverview zfe rules
 * @author cleam
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
  // rules: requireIndex(__dirname + '/rules'),
  configs: {
    common: require('./configs/common'),
    vue: require('./configs/vue'),
    vue3: require('./configs/vue3'),
    react: require('./configs/react'),
    node: require('./configs/node'),
  },
};
