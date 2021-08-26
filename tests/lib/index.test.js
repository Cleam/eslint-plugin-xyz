const ets = require('../../lib/index.js');
const util = require('util');
const path = require('path');
const fs = require('fs')

// console.log(util.inspect(ets, {showHidden: false, depth: null}));

fs.writeFile(path.resolve(__dirname, '../t.js'), `module.exports = ${util.inspect(ets, {showHidden: false, depth: null})}`, {encoding: 'utf8'}, err => {
  if(err){
    console.error(err)
  }
})