'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _mocks;exports.default=




interceptFetch;var _mocks2=require('./mocks.json');var _mocks3=_interopRequireDefault(_mocks2);var _actions=require('../actions/actions');var _constants=require('../constants');var _index=require('../models/index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function interceptFetch(_ref){var dispatch=_ref.dispatch;var getState=_ref.getState;
return function(next){return function(action){var _ref2=
action||{};var type=_ref2.type;var _ref2$payload=_ref2.payload;var payload=_ref2$payload===undefined?{}:_ref2$payload;

return type===_actions.FETCH?
Promise.resolve(mocks[payload.url]):
next(action);};};}



var mocks=(_mocks={},_defineProperty(_mocks,_constants.LAUNCH_URL,
_mocks3.default.launches.map(function(mock){return new _index.LaunchStory(mock);})),_defineProperty(_mocks,_constants.NEWS_URL,
_mocks3.default.news.map(function(mock){return new _index.NewsStory(mock);})),_mocks);