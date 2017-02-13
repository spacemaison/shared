'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Stories=undefined;var _index=require('./index');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Stories=exports.Stories=
function Stories()



{var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var _ref$featured=_ref.featured;var featured=_ref$featured===undefined?[]:_ref$featured;var _ref$media=_ref.media;var media=_ref$media===undefined?[]:_ref$media;var _ref$news=_ref.news;var news=_ref$news===undefined?[]:_ref$news;var _ref$launches=_ref.launches;var launches=_ref$launches===undefined?[]:_ref$launches;_classCallCheck(this,Stories);
this.featured=featured;
this.media=media;
this.news=(news||[]).map(function(story){return new _index.NewsStory(story);});
this.launches=(launches||[]).map(function(story){return new _index.LaunchStory(story);});};