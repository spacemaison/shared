'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Reminder=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _xdate=require('xdate');var _xdate2=_interopRequireDefault(_xdate);
var _Model2=require('./Model');
var _LaunchStory=require('./LaunchStory');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Reminder=exports.Reminder=function(_Model){_inherits(Reminder,_Model);
function Reminder(){var reminder=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,Reminder);
if(reminder instanceof _LaunchStory.LaunchStory){var
id=reminder.id;var _reminder$missions=reminder.missions;var missions=_reminder$missions===undefined?[]:_reminder$missions;var _reminder$rocket=reminder.rocket;var rocket=_reminder$rocket===undefined?{}:_reminder$rocket;var windowStart=reminder.windowStart;
var missionName=missions[0]&&missions[0].name||rocket.name;
var date=(0,_xdate2.default)(windowStart).addMinutes(-10).toDate();var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Reminder).call(this,

{
date:date,
id:id,
message:'The '+missionName+' launch window starts in ten minutes'}));}else

{var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Reminder).call(this,
reminder));}


if(_this.id<1||!Number.isInteger(_this.id)){
throw new TypeError('Positive id integer required');}return _possibleConstructorReturn(_this);}_createClass(Reminder,[{key:_Model2.fields,get:function get()



{
return _extends(_get(Object.getPrototypeOf(Reminder.prototype),_Model2.fields,this),{
id:Number,
date:Date,
message:String});}}]);return Reminder;}(_Model2.Model);