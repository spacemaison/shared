'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=



function(){var reminders=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];var _ref=arguments[1];var _ref$payload=_ref.payload;var payload=_ref$payload===undefined?{}:_ref$payload;var type=_ref.type;
switch(type){
case actions.LAUNCH_REFRESH:
return updateReminders(reminders,payload);

case actions.REMINDER_REMOVE:
return removeReminder(reminders,payload);

case actions.REMINDER_ADD:
return addReminder(reminders,payload);

default:return reminders;}};exports.










updateReminders=updateReminders;exports.












hasReminder=hasReminder;exports.



removeReminder=removeReminder;exports.











addReminder=addReminder;var _actions=require('../actions/actions');var actions=_interopRequireWildcard(_actions);var _index=require('../interfaces/index');var interfaces=_interopRequireWildcard(_index);var _index2=require('../models/index');var models=_interopRequireWildcard(_index2);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function updateReminders(reminders,launches){var notifier=interfaces.get('notifier');Array.from(launches).filter(function(launch){return reminders.some(function(reminder){return launch.id===reminder.id;});}).forEach(function(launch){notifier.add(new models.Reminder(launch));});return reminders;}function hasReminder(reminders,reminder){return reminders.some(function(_ref2){var id=_ref2.id;return id===reminder.id;});}function removeReminder(reminders,reminder){reminders=reminders.filter(function(_ref3){var id=_ref3.id;return id!==reminder.id;});if(!reminders.length){interfaces.get('notifier').removeAll();}return reminders;}function addReminder(reminders,reminder){
return reminders.
filter(function(_ref4){var id=_ref4.id;return id!==reminder.id;}).
concat(reminder);}