'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.NewsStory=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Model2=require('./Model');
var _Image=require('./Image');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

NewsStory=exports.NewsStory=function(_Model){_inherits(NewsStory,_Model);
function NewsStory(){var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var image=_ref.image;_classCallCheck(this,NewsStory);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(NewsStory).apply(this,
arguments));
_this.image=new _Image.Image(image);return _this;}_createClass(NewsStory,[{key:_Model2.fields,get:function get()


{
return{
url:String,
description:String,
source:String,
title:String,
type:String,
rank:Number,
image:_Image.Image};}}]);return NewsStory;}(_Model2.Model);