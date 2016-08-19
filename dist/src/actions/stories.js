'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.stories=exports.news=exports.launches=undefined;var _fetch=require('./fetch');var fetch=_interopRequireWildcard(_fetch);
var _action=require('./action');
var _actions=require('./actions');
var _constants=require('../constants');
var _index=require('../models/index');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

var launches=exports.launches=(0,_action.wrap)(_actions.LAUNCH_REFRESH,regeneratorRuntime.mark(function _callee(){var url=arguments.length<=0||arguments[0]===undefined?_constants.LAUNCH_URL:arguments[0];return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=_index.StoryContainer;_context.next=3;return(
fetch.json(url));case 3:_context.t1=_context.sent;return _context.abrupt('return',new _context.t0(false,_context.t1));case 5:case'end':return _context.stop();}}},_callee,this);}));


var news=exports.news=(0,_action.wrap)(_actions.NEWS_REFRESH,regeneratorRuntime.mark(function _callee2(){var url=arguments.length<=0||arguments[0]===undefined?_constants.NEWS_URL:arguments[0];return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.t0=_index.StoryContainer;_context2.next=3;return(
fetch.json(url));case 3:_context2.t1=_context2.sent;return _context2.abrupt('return',new _context2.t0(false,_context2.t1));case 5:case'end':return _context2.stop();}}},_callee2,this);}));


var stories=exports.stories=(0,_action.aggragate)(news,launches);