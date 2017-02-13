'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.getGallery=exports.galleries=undefined;var _rest=require('./rest');var rest=_interopRequireWildcard(_rest);
var _fetch=require('./fetch');var fetch=_interopRequireWildcard(_fetch);
var _action=require('./action');
var _actions=require('./actions');
var _constants=require('../constants');
var _index=require('../models/index');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

var galleries=exports.galleries=rest.getJSONArray(_index.Gallery,_constants.GALLERIES_URL);

var getGallery=exports.getGallery=(0,_action.wrap)(_actions.GALLERY_LOAD,regeneratorRuntime.mark(function _callee(id){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=_index.Gallery;_context.next=3;return(
fetch.json(_constants.GALLERIES_URL+'/'+id));case 3:_context.t1=_context.sent;return _context.abrupt('return',new _context.t0(_context.t1));case 5:case'end':return _context.stop();}}},_callee,this);}));