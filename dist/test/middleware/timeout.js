'use strict';var _chai=require('chai');
var _timeout=require('../../src/middleware/timeout');var _timeout2=_interopRequireDefault(_timeout);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('timeout middleware',function(){
it('intercepts timeout actions',function(){
var next=function next(){return next.called=true;};
var action={type:'TIMEOUT',payload:{timeout:0}};
var promise=(0,_timeout2.default)()(next)(action);

(0,_chai.expect)(promise).to.be.instanceof(Promise);
(0,_chai.expect)(next.called).to.not.be.true;

return promise;});


it('moves onto the next middleware if it\'s not a timeout action',function(){
var next=function next(){return next.called=true;};
var action={type:'NONSENSE',payload:{timeout:0}};
var promise=(0,_timeout2.default)()(next)(action);

(0,_chai.expect)(next.called).to.be.true;});});