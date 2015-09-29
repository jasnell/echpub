'use strict';

const columnify = require('columnify');
const flatten = require('flat');

function output(str) {
  var data = '';
  str.on('data', (chunk)=>data+=chunk);
  str.on('end', ()=>{
    try {
      var obj = JSON.parse(data);
      delete obj.results.metadata;
      console.log(
        columnify(flatten(obj, {safe:false, maxDepth: 100}),
        {
          showHeaders:false,
          maxWidth: 80
        }
      ));
    } catch (err) {
      console.error('Unable to parse results');
      console.error(err);
      process.exit(1);
    }
  });
}
module.exports = output;
