'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.LAUNCH_REFRESH=exports.NEWS_REFRESH=exports.STORIES_REFRESH=exports.TIMEOUT=exports.FETCH=undefined;var _constants=require('../constants');

var FETCH=exports.FETCH=_constants.namespace.resolve('fetch');
var TIMEOUT=exports.TIMEOUT=_constants.namespace.resolve('timeout');
var STORIES_REFRESH=exports.STORIES_REFRESH=_constants.namespace.resolve('stories');
var NEWS_REFRESH=exports.NEWS_REFRESH=_constants.namespace.resolve('stories/news');
var LAUNCH_REFRESH=exports.LAUNCH_REFRESH=_constants.namespace.resolve('stories/launches');