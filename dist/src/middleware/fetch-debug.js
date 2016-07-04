'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=







interceptFetch;var _actions=require('../actions/actions');var _news=require('../actions/news');var _index=require('../../test/mock/index');var mockData=_interopRequireWildcard(_index);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var mocks=_defineProperty({},_news.refresh.url,mockData.MOCK_NEWS_RSS_FEED);function interceptFetch(_ref){var dispatch=_ref.dispatch;var getState=_ref.getState;
return function(next){return function(action){var _ref2=
action||{};var type=_ref2.type;var _ref2$payload=_ref2.payload;var payload=_ref2$payload===undefined?{}:_ref2$payload;

return type===_actions.FETCH?
Promise.resolve(mocks[payload.url]):
next(action);};};}