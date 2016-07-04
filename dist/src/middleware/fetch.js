'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=


interceptFetch;var _fetchEverywhere=require('fetch-everywhere');var _fetchEverywhere2=_interopRequireDefault(_fetchEverywhere);var _actions=require('../actions/actions');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function interceptFetch(_ref){var dispatch=_ref.dispatch;var getState=_ref.getState;
return function(next){return function(action){var _ref2=
action||{};var type=_ref2.type;var payload=_ref2.payload;var _ref3=
payload||{};var url=_ref3.url;var params=_ref3.params;var coerceTo=_ref3.coerceTo;

return type===_actions.FETCH?
(0,_fetchEverywhere2.default)(url,params).then(coerceResponse.bind(null,coerceTo)):
next(action);};};}



function coerceResponse(coerceTo,response){
if(response.ok){
if(coerceTo){
return response[coerceTo]();}else
{
return response;}}else

{var
status=response.status;var statusText=response.statusText;
throw new Error('Request failed with status code '+
status+' and message '+statusText);}}