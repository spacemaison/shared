"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var News=exports.News=
function News(){var isRefreshing=arguments.length<=0||arguments[0]===undefined?false:arguments[0];var items=arguments.length<=1||arguments[1]===undefined?[]:arguments[1];_classCallCheck(this,News);
this.isRefreshing=isRefreshing;
this.items=items;};