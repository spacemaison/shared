'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Notifier=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Reminder=require('../models/Reminder');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var








Notifier=exports.Notifier=function(){function Notifier(){_classCallCheck(this,Notifier);}_createClass(Notifier,[{key:'add',value:function add()
{var reminder=arguments.length<=0||arguments[0]===undefined?new _Reminder.Reminder():arguments[0];
console.warn('Unimplemented Notifier method "add"');

return Promise.resolve(reminder);}},{key:'remove',value:function remove()


{var reminder=arguments.length<=0||arguments[0]===undefined?new _Reminder.Reminder():arguments[0];
console.warn('Unimplemented Notifier method "remove"');

return Promise.resolve(reminder);}},{key:'removeAll',value:function removeAll()


{
console.warn('Unimplemented Notifier method "removeAll"');}}]);return Notifier;}();