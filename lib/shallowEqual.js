'use strict';

var shallowEqual = require('shallowequal');
var deprecate = require('util-deprecate');

module.exports = deprecate(shallowEqual, '`rcUtil.shallowEqual()` is deprecated, use `shallowEqual()` by `require(\'shallowequal\')` instead');