'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.




addReminder=addReminder;exports.










removeReminder=removeReminder;exports.










updateReminder=updateReminder;var _action=require('./action');var _actions=require('./actions');var actions=_interopRequireWildcard(_actions);var _index=require('../interfaces/index');var interfaces=_interopRequireWildcard(_index);var _Reminder=require('../models/Reminder');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var _marked=[addReminder,removeReminder,updateReminder].map(regeneratorRuntime.mark);function addReminder(){var reminder=arguments.length<=0||arguments[0]===undefined?new _Reminder.Reminder():arguments[0];var notifier=arguments.length<=1||arguments[1]===undefined?interfaces.get('notifier'):arguments[1];return regeneratorRuntime.wrap(function addReminder$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return notifier.add(reminder);case 3:reminder=_context.sent;_context.next=6;return(0,_action.action)(actions.REMINDER_ADD,reminder);case 6:return _context.abrupt('return',_context.sent);case 9:_context.prev=9;_context.t0=_context['catch'](0);_context.next=13;return(0,_action.action)(actions.REMINDER_ADD,_context.t0);case 13:return _context.abrupt('return',_context.sent);case 14:case'end':return _context.stop();}}},_marked[0],this,[[0,9]]);}function removeReminder(){var reminder=arguments.length<=0||arguments[0]===undefined?new _Reminder.Reminder():arguments[0];var notifier=arguments.length<=1||arguments[1]===undefined?interfaces.get('notifier'):arguments[1];return regeneratorRuntime.wrap(function removeReminder$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return notifier.remove(reminder);case 3:reminder=_context2.sent;_context2.next=6;return(0,_action.action)(actions.REMINDER_REMOVE,reminder);case 6:return _context2.abrupt('return',_context2.sent);case 9:_context2.prev=9;_context2.t0=_context2['catch'](0);_context2.next=13;return(0,_action.action)(actions.REMINDER_REMOVE,_context2.t0);case 13:return _context2.abrupt('return',_context2.sent);case 14:case'end':return _context2.stop();}}},_marked[1],this,[[0,9]]);}function updateReminder(){var
reminder=arguments.length<=0||arguments[0]===undefined?new _Reminder.Reminder():arguments[0];var
notifier=arguments.length<=1||arguments[1]===undefined?interfaces.get('notifier'):arguments[1];return regeneratorRuntime.wrap(function updateReminder$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:return _context3.delegateYield(
addReminder(reminder,notifier),'t0',1);case 1:return _context3.abrupt('return',_context3.t0);case 2:case'end':return _context3.stop();}}},_marked[2],this);}