'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Notifier=undefined;exports.








get=get;exports.







set=set;var _Notifier=require('./Notifier');exports.Notifier=_Notifier.Notifier;var interfaces={__proto__:null,notifier:new _Notifier.Notifier()};function get(name){if(!interfaces[name]){throw new Error('Interface '+name+' doesn\'t exist');}return interfaces[name];}function set(name){var interfaceImpl=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
switch(name){
case'notifier':
if(!(interfaceImpl instanceof _Notifier.Notifier)){
throw new TypeError('Expected Notifier implementation for notifier');}

break;}


interfaces[name]=interfaceImpl;
return interfaceImpl;}