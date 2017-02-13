'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.stories=exports.news=exports.media=exports.launches=exports.featured=undefined;var _rest=require('./rest');var rest=_interopRequireWildcard(_rest);
var _action=require('./action');
var _constants=require('../constants');
var _index=require('../models/index');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}





var featured=exports.featured=rest.getJSONArray(_index.FeaturedStory,_constants.FEATURED_URL);
var launches=exports.launches=rest.getJSONArray(_index.LaunchStory,_constants.LAUNCH_URL);
var media=exports.media=rest.getJSONArray(_index.MediaStory,_constants.MEDIA_URL);
var news=exports.news=rest.getJSONArray(_index.NewsStory,_constants.NEWS_URL);
var stories=exports.stories=(0,_action.aggragate)(featured,news,launches,media);