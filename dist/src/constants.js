'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.LAUNCH_URL=exports.NEWS_URL=exports.namespace=undefined;var _url=require('url');var _url2=_interopRequireDefault(_url);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var namespace=exports.namespace=_url2.default.parse('http://localhost:3000');
var NEWS_URL=exports.NEWS_URL=namespace.resolve('stories/news');
var LAUNCH_URL=exports.LAUNCH_URL=namespace.resolve('stories/launches');