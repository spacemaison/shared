'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _mocks;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=










interceptFetch;var _xdate=require('xdate');var _xdate2=_interopRequireDefault(_xdate);var _url=require('url');var _url2=_interopRequireDefault(_url);var _mocks2=require('./mocks.json');var _mocks3=_interopRequireDefault(_mocks2);var _actions=require('../actions/actions');var _constants=require('../constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function interceptFetch(_ref){var dispatch=_ref.dispatch;var getState=_ref.getState;
return function(next){return function(action){var _ref2=
action||{};var type=_ref2.type;var _ref2$payload=_ref2.payload;var payload=_ref2$payload===undefined?{}:_ref2$payload;

if(type!==_actions.FETCH){
return next(action);}


var url=_url2.default.parse(payload.url);
var parts=url.pathname.split('/').filter(function(i){return i;});
var itemID=Number.parseInt(parts[parts.length-1]);

if(!isNaN(itemID)){
var pathname=parts.slice(0,parts.length-1).join('/');
var mockURL=url.protocol+'//'+url.host+'/'+pathname;

return Promise.resolve(mocks[mockURL][itemID]);}else
{
return Promise.resolve(mocks[payload.url]);}};};}




var mocks=(_mocks={},_defineProperty(_mocks,_constants.FEATURED_URL,
_mocks3.default.featured),_defineProperty(_mocks,_constants.LAUNCH_URL,
_mocks3.default.launches.
map(function(mock,i){return _extends(mock,{
windowStart:(0,_xdate2.default)(new Date()).addDays(i).addMinutes(11).toDate(),
windowEnd:(0,_xdate2.default)(new Date()).addDays(i).addMinutes(20).toDate()});})),_defineProperty(_mocks,_constants.GALLERIES_URL,

function(){
var firstGallery=_mocks3.default.galleries[0];

firstGallery.items=[].concat(_toConsumableArray(new Array(10))).map(function(_,i){return(
firstGallery.items[Math.floor(Math.random()*3)]);});


return[firstGallery].concat(_toConsumableArray(_mocks3.default.galleries.slice(1)));}()),_defineProperty(_mocks,_constants.MEDIA_URL,

_mocks3.default.media),_defineProperty(_mocks,_constants.NEWS_URL,
_mocks3.default.news),_mocks);