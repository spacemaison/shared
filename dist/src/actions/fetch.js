'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.


fetch=fetch;exports.







text=text;exports.



json=json;exports.



post=post;exports.



postJSON=postJSON;var _action=require('./action');var _actions=require('./actions');function fetch(url){var params=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var coerceTo=arguments.length<=2||arguments[2]===undefined?coerceOptions.text:arguments[2];if(!coerceOptions[coerceTo]){coerceTo=null;}return(0,_action.action)(_actions.FETCH,{url:url,params:params,coerceTo:coerceTo});}function text(url){var params=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return fetch(url,params);}function json(url){var params=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return fetch(url,params,coerceOptions.json);}function post(url,body){return fetch(url,{method:'POST',body:body},null);}function postJSON(url,body){
if(typeof body!=='string'){
body=JSON.stringify(body);}


return fetch(url,{
method:'POST',
headers:{
'Accept':'application/json',
'Content-Type':'application/json'},

body:body},
null);}


var coerceOptions={
__proto__:null,

'arrayBuffer':'arrayBuffer',
'blob':'blob',
'json':'json',
'text':'text',
'formData':'formData'};