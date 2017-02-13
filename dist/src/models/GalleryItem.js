'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.GalleryItem=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _Model2=require('./Model');
var _Image=require('./Image');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

GalleryItem=exports.GalleryItem=function(_Model){_inherits(GalleryItem,_Model);
function GalleryItem(){_classCallCheck(this,GalleryItem);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(GalleryItem).apply(this,
arguments));
_this.image=new _Image.Image(_this.image);return _this;}_createClass(GalleryItem,[{key:_Model2.fields,get:function get()


{
return _extends(_get(Object.getPrototypeOf(GalleryItem.prototype),_Model2.fields,this),{
id:String,
image:_Image.Image,
credit:Array,
license:String,
title:String,
description:String,
date:Date,
infoURL:String});}}]);return GalleryItem;}(_Model2.Model);