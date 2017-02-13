'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.



getJSONArray=getJSONArray;var _action=require('./action');var _StoryContainer=require('../models/StoryContainer');var _fetch=require('./fetch');var fetch=_interopRequireWildcard(_fetch);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function getJSONArray(Model,url){var type=arguments.length<=2||arguments[2]===undefined?url:arguments[2];
return(0,_action.wrap)(type,regeneratorRuntime.mark(function _callee(){var _url=arguments.length<=0||arguments[0]===undefined?url:arguments[0];var
json,
stories;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return fetch.json(_url);case 2:json=_context.sent;stories=(json||[]).map(function(s){return new Model(s);});return _context.abrupt('return',

new _StoryContainer.StoryContainer(false,stories));case 5:case'end':return _context.stop();}}},_callee,this);}));}