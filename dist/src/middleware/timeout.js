'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=

timeout;var _actions=require('../actions/actions');function timeout(){
return function(next){return function(action){var _ref=
action||{};var type=_ref.type;var _ref$payload=_ref.payload;var payload=_ref$payload===undefined?{}:_ref$payload;

return type===_actions.TIMEOUT?
new Promise(function(resolve){return setTimeout(resolve,payload.timeout||0);}):
next(action);};};}