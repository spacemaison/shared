'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.




galleries=galleries;var _rest=require('./rest');var rest=_interopRequireWildcard(_rest);var _constants=require('../constants');var _actions=require('../actions/actions');var _StoryContainer=require('../models/StoryContainer');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function galleries(){var galleries=arguments.length<=0||arguments[0]===undefined?new _StoryContainer.StoryContainer():arguments[0];var action=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var
type=action.type;

switch(type){
case _constants.GALLERIES_URL:return allGalleries(galleries,action);
case _actions.GALLERY_LOAD:return galleryItem(galleries,action);
default:return galleries;}}



var allGalleries=rest.handleJSONArray(_constants.GALLERIES_URL);

function galleryItem(galleries,_ref){var _ref$meta=_ref.meta;var meta=_ref$meta===undefined?{}:_ref$meta;var gallery=_ref.payload;
if(meta.state!=='finished'){
return galleries;}


return new _StoryContainer.StoryContainer(false,[].concat(_toConsumableArray(galleries)).
filter(function(_ref2){var id=_ref2.id;return id!==gallery.id;}).
concat(gallery));}