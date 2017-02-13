'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}


var fields=exports.fields=Symbol('Model/fields');



























var noop=function noop(){};var






Model=exports.Model=function(){_createClass(Model,[{key:
fields,get:function get(){
return Object.create(null);}}]);


function Model(){var _this=this;var values=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,Model);
var defaults=this[fields];var _loop=function _loop(

name){
var defaultValue=function(value){
switch(defaults[name]){
case Array:return[];
case Boolean:return false;
case Date:return new Date();
case Function:return noop;
case Number:return NaN;
case Object:return{};
case RegExp:return (/.*/);
case String:return'';
default:return value;}}(

defaults[name]);

_this[name]=name in values?values[name]:defaultValue;};for(var name in defaults){_loop(name);}}return Model;}();