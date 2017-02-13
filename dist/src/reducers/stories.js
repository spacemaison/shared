'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.media=exports.launches=exports.news=exports.featured=undefined;var _rest=require('./rest');var rest=_interopRequireWildcard(_rest);
var _constants=require('../constants');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}





var featured=exports.featured=rest.handleJSONArray(_constants.FEATURED_URL);
var news=exports.news=rest.handleJSONArray(_constants.NEWS_URL);
var launches=exports.launches=rest.handleJSONArray(_constants.LAUNCH_URL);
var media=exports.media=rest.handleJSONArray(_constants.MEDIA_URL);