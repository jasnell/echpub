'use strict';

const Configstore = require('configstore');
const pkg = require('./package.json');

const conf = new Configstore(pkg.name, {});

function add(name, url, token, callback) {
  if (typeof callback !== 'function')
    throw new TypeError('Callback must be a function');
  setImmediate(function() {
    conf.set(name, {
      url:url,
      token:token,
      status:undefined,
      last:undefined
    });
    callback();
  });
}
exports.add = add;

function update(name, status, last, callback) {
  if (typeof callback !== 'function')
    throw new TypeError('Callback must be a function');
  get(name, function(err, info) {
    if (err)
      return callback(err);
    info.status = status;
    info.last = last;
    conf.set(name, info);
    callback();
  });
}
exports.update = update;

function remove(name, callback) {
  if (typeof callback !== 'function')
    throw new TypeError('Callback must be a function');
  setImmediate(function() {
    conf.del(name);
    callback();
  });
}
exports.remove = remove;

function get(name, callback) {
  if (typeof callback !== 'function')
    throw new TypeError('Callback must be a function');
  setImmediate(function() {
    callback(null,conf.get(name));
  });
}
exports.get = get;

function list(callback) {
  if (typeof callback !== 'function')
    throw new TypeError('Callback must be a function');
  setImmediate(function() {
    callback(null, Object.keys(conf.all));
  });
}
exports.list = list;
