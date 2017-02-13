'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.












createStore=createStore;var _redux=require('redux');var _reduxStorage=require('redux-storage');var storage=_interopRequireWildcard(_reduxStorage);var _reduxGen=require('redux-gen');var _reduxGen2=_interopRequireDefault(_reduxGen);var _reduxStorageDecoratorFilter=require('redux-storage-decorator-filter');var _reduxStorageDecoratorFilter2=_interopRequireDefault(_reduxStorageDecoratorFilter);var _fetch=require('./middleware/fetch');var _fetch2=_interopRequireDefault(_fetch);var _timeout=require('./middleware/timeout');var _timeout2=_interopRequireDefault(_timeout);var _fetchDebug=require('./middleware/fetch-debug');var _fetchDebug2=_interopRequireDefault(_fetchDebug);var _index=require('./reducers/index');var sharedReducers=_interopRequireWildcard(_index);var _actions=require('./actions/actions');var actions=_interopRequireWildcard(_actions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function createStore()


{var addedReducers=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var addedMiddleware=arguments.length<=1||arguments[1]===undefined?[]:arguments[1];var options=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];var
globalErrorHandler=options.globalErrorHandler;var globalSuccessHandler=options.globalSuccessHandler;
var storageEngine=(0,_reduxStorageDecoratorFilter2.default)(options.storageEngine,[
'reminders']);

var storageMiddleware=storage.createMiddleware(storageEngine,[],[
actions.REMINDER_ADD,
actions.REMINDER_REMOVE,
actions.REMINDER_TOGGLE]);

var storageLoader=storage.createLoader(storageEngine);
var fetchMiddleware=options.debug===true?_fetchDebug2.default:_fetch2.default;



var reducers=_extends({},addedReducers,sharedReducers);
var store=(0,_redux.createStore)(
storage.reducer((0,_redux.combineReducers)(reducers)),
_redux.applyMiddleware.apply(undefined,[
(0,_reduxGen2.default)(globalErrorHandler,globalSuccessHandler),
fetchMiddleware,_timeout2.default,

storageMiddleware].concat(_toConsumableArray(
addedMiddleware))));

storageLoader(store);

return store;}