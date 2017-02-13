"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var StoryContainer=exports.StoryContainer=function(){
function StoryContainer(){var isRefreshing=arguments.length<=0||arguments[0]===undefined?false:arguments[0];var items=arguments.length<=1||arguments[1]===undefined?[]:arguments[1];_classCallCheck(this,StoryContainer);
this.isRefreshing=isRefreshing;
this.items=items;}_createClass(StoryContainer,[{key:typeof Symbol==="function"?


Symbol.iterator:"@@iterator",value:function value(){var
items=this.items;

return(
items&&items[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]&&items[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()||
Array.prototype[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]());}}]);return StoryContainer;}();