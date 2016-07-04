'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.


timeout=timeout;var _action=require('./action');var _actions=require('./actions');function timeout(timeout){
return(0,_action.action)(_actions.TIMEOUT,{timeout:timeout});}