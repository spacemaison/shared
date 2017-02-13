'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.GALLERY_LOAD=exports.REMINDER_REMOVE=exports.REMINDER_ADD=exports.TIMEOUT=exports.FETCH=undefined;var _constants=require('../constants');

var FETCH=exports.FETCH=_constants.namespace.resolve('fetch');
var TIMEOUT=exports.TIMEOUT=_constants.namespace.resolve('timeout');
var REMINDER_ADD=exports.REMINDER_ADD=_constants.namespace.resolve('reminders/add');
var REMINDER_REMOVE=exports.REMINDER_REMOVE=_constants.namespace.resolve('reminders/remove');
var GALLERY_LOAD=exports.GALLERY_LOAD=_constants.namespace.resolve('gallery/load');