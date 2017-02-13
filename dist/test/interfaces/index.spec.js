'use strict';
var _chai=require('chai');
var _index=require('../../src/interfaces/index');

describe('interfaces',function(){
it('gets an interface',function(){
(0,_chai.expect)((0,_index.get)('notifier')).to.be.instanceOf(_index.Notifier);});


it('gets an interface, but throw when it doesn\'t exist',function(){
(0,_chai.expect)(_index.get.bind(null,'nonexistent')).
to.throw(Error,/Interface nonexistent/);});


it('sets an interface',function(){
var notifier=new _index.Notifier();

(0,_chai.expect)((0,_index.set)('notifier',notifier)).to.equal(notifier);});


it('sets an interface, but throws when types don\'t match',function(){
(0,_chai.expect)(_index.set.bind(null,'notifier',{})).to.throw(TypeError);});});