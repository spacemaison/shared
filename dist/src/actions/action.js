'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.states=undefined;exports.


action=action;exports.














starting=starting;exports.



finished=finished;exports.



aggragate=aggragate;exports.











wrap=wrap;var _isGenerator=require('is-generator');var _isGenerator2=_interopRequireDefault(_isGenerator);var _timeout=require('./timeout');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function action(type){var payload=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var meta=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];payload=payload||{};var error=null;if(payload instanceof Error){error=payload;payload=null;meta=Object.create(meta||null);meta.state=states.error;}return{type:type,error:error,payload:payload,meta:meta};}function starting(type,payload){return action(type,payload,{state:states.starting});}function finished(type,payload){return action(type,payload,{state:states.finished});}function aggragate(){for(var _len=arguments.length,actions=Array(_len),_key=0;_key<_len;_key++){actions[_key]=arguments[_key];}return regeneratorRuntime.mark(function _callee(){var _iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,_action;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_iteratorNormalCompletion=true;_didIteratorError=false;_iteratorError=undefined;_context.prev=3;_iterator=actions[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 5:if(_iteratorNormalCompletion=(_step=_iterator.next()).done){_context.next=16;break;}_action=_step.value;if(!_isGenerator2.default.fn(_action)){_context.next=11;break;}return _context.delegateYield(_action(),'t0',9);case 9:_context.next=13;break;case 11:_context.next=13;return _action();case 13:_iteratorNormalCompletion=true;_context.next=5;break;case 16:_context.next=22;break;case 18:_context.prev=18;_context.t1=_context['catch'](3);_didIteratorError=true;_iteratorError=_context.t1;case 22:_context.prev=22;_context.prev=23;if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}case 25:_context.prev=25;if(!_didIteratorError){_context.next=28;break;}throw _iteratorError;case 28:return _context.finish(25);case 29:return _context.finish(22);case 30:case'end':return _context.stop();}}},_callee,this,[[3,18,22,30],[23,,25,29]]);});}function wrap(type,wrapped){
return regeneratorRuntime.mark(function _callee2(){var



emitted,_args2=arguments;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return starting(type);case 3:if(!_isGenerator2.default.fn(wrapped)){_context2.next=8;break;}return _context2.delegateYield(
wrapped.apply(undefined,_args2),'t1',5);case 5:_context2.t0=_context2.t1;_context2.next=11;break;case 8:_context2.next=10;return(
wrapped.apply(undefined,_args2));case 10:_context2.t0=_context2.sent;case 11:emitted=_context2.t0;_context2.next=14;return(

(0,_timeout.timeout)(1));case 14:_context2.next=16;return(

finished(type,emitted));case 16:return _context2.abrupt('return',_context2.sent);case 19:_context2.prev=19;_context2.t2=_context2['catch'](0);_context2.next=23;return(

action(type,_context2.t2));case 23:return _context2.abrupt('return',_context2.sent);case 24:case'end':return _context2.stop();}}},_callee2,this,[[0,19]]);});}




var states=exports.states=Object.freeze({
__proto__:null,

starting:'starting',
finished:'finished',
error:'error'});