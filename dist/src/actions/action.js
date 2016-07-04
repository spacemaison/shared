'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.action=action;exports.












starting=starting;exports.



finished=finished;function action(type,payload){var meta=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];var error=null;if(payload instanceof Error){error=payload;payload=null;meta=Object.create(meta||null);meta.state=states.error;}return{type:type,error:error,payload:payload,meta:meta};}function starting(type,payload){return action(type,payload,{state:states.starting});}function finished(type,payload){
return action(type,payload,{state:states.finished});}


var states=exports.states=Object.freeze({
__proto__:null,

starting:'starting',
finished:'finished',
error:'error'});