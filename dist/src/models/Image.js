'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Image=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _Model2=require('./Model');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Image=exports.Image=function(_Model){_inherits(Image,_Model);
function Image(){var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var url=_ref.url;var size=_ref.size;var description=_ref.description;_classCallCheck(this,Image);
if(url){var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Image).call(this,
{
urls:[url],
sizes:[size].filter(function(s){return s;}),
descriptions:[description].filter(function(d){return d;})}));}else

{var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Image).apply(this,
arguments));}return _possibleConstructorReturn(_this);}_createClass(Image,[{key:'getReactNativeSource',value:function getReactNativeSource()











{var _this2=this;
return this.urls.map(function(uri,index){
var size=_this2.sizes[index];
var description=_this2.descriptions[index]||'';

if(size){
return{uri:uri,width:size[0],height:size[1],description:description};}else
{
return{uri:uri,description:description};}});}},{key:_Model2.fields,get:function get(){return _extends(_get(Object.getPrototypeOf(Image.prototype),_Model2.fields,this),{descriptions:Array,urls:Array,sizes:Array});}}]);return Image;}(_Model2.Model);