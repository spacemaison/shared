'use strict';var _chai=require('chai');
var _timeout=require('../../src/actions/timeout');
var _action=require('../../src/actions/action');var actions=_interopRequireWildcard(_action);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

describe('actions creators',function(){
it('creates actions',function(){
var payload={};
var error=new Error();
var meta={};

(0,_chai.expect)(actions.action('type',payload,meta)).to.deep.equal({
type:'type',
error:null,
payload:payload,
meta:meta});


(0,_chai.expect)(actions.action('type',error)).to.deep.equal({
type:'type',
payload:null,
error:error,
meta:{
state:'error'}});});




it('creates finished action',function(){
(0,_chai.expect)(actions.finished('type')).to.deep.equal({
type:'type',
payload:{},
error:null,
meta:{
state:'finished'}});});




it('creates starting action',function(){
(0,_chai.expect)(actions.starting('type')).to.deep.equal({
type:'type',
payload:{},
error:null,
meta:{
state:'starting'}});});




it('creates aggragate actions',function(){
function spy(){spy.called=true;return true;}
var aggragate=actions.aggragate(spy);

(0,_chai.expect)(aggragate().next().value).to.be.true;
(0,_chai.expect)(spy.called).to.be.true;});


it('creates wrapped generator actions',function(){var _marked=[
spy].map(regeneratorRuntime.mark);function spy(one,two){return regeneratorRuntime.wrap(function spy$(_context){while(1){switch(_context.prev=_context.next){case 0:
(0,_chai.expect)(one).to.equal(1);
(0,_chai.expect)(two).to.equal(2);

spy.called=true;_context.next=5;return(
true);case 5:case'end':return _context.stop();}}},_marked[0],this);}

var wrapped=actions.wrap('type',spy);
var gen=wrapped(1,2);

(0,_chai.expect)(gen.next().value).to.deep.equal(actions.starting('type'));
(0,_chai.expect)(gen.next().value).to.be.true;
(0,_chai.expect)(gen.next().value).to.deep.equal((0,_timeout.timeout)(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(actions.finished('type'));
(0,_chai.expect)(gen.next().done).to.be.true;
(0,_chai.expect)(spy.called).to.be.true;});


it('creates failing wrapped generator actions',function(){
var error=new Error();
var spy=function spy(){throw error;};
var wrapped=actions.wrap('type',spy);
var gen=wrapped();

(0,_chai.expect)(gen.next().value).to.deep.equal(actions.starting('type'));
(0,_chai.expect)(gen.next().value).to.deep.equal(actions.action('type',error));
(0,_chai.expect)(gen.next().done).to.be.true;});});