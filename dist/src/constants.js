'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.GALLERIES_URL=exports.FEATURED_URL=exports.MEDIA_URL=exports.LAUNCH_URL=exports.NEWS_URL=exports.namespace=exports.URL=exports.PORT=exports.HOST=exports.PROTOCOL=undefined;var _url=require('url');var _url2=_interopRequireDefault(_url);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var PROTOCOL=exports.PROTOCOL=process.env.SPACE_MAISON_PROTOCOL||'http:';
var HOST=exports.HOST=process.env.SPACE_MAISON_HOSTNAME||'localhost';
var PORT=exports.PORT=process.env.SPACE_MAISON_PORT||'3000';
var URL=exports.URL=PROTOCOL+'//'+HOST+(PORT?':'+PORT:'');

var namespace=exports.namespace=_url2.default.parse(URL);
var NEWS_URL=exports.NEWS_URL=namespace.resolve('stories/news');
var LAUNCH_URL=exports.LAUNCH_URL=namespace.resolve('stories/launches');
var MEDIA_URL=exports.MEDIA_URL=namespace.resolve('stories/media');
var FEATURED_URL=exports.FEATURED_URL=namespace.resolve('stories/featured');
var GALLERIES_URL=exports.GALLERIES_URL=namespace.resolve('stories/galleries');