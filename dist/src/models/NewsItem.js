'use strict';Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var NewsItem=exports.NewsItem=
function NewsItem()



{var url=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var description=arguments.length<=1||arguments[1]===undefined?'':arguments[1];var thumbnailSource=arguments.length<=2||arguments[2]===undefined?'':arguments[2];var thumbnailDescription=arguments.length<=3||arguments[3]===undefined?'':arguments[3];_classCallCheck(this,NewsItem);
this.url=url;
this.description=description;
this.thumbnailSource=thumbnailSource;
this.thumbnailDescription=thumbnailDescription;};