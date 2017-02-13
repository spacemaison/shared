'use strict';
var _chai=require('chai');
var _constants=require('../src/constants');

describe('constants',function(){
it('resolves a namespace',function(){
(0,_chai.expect)(_constants.namespace.resolve('foo')).to.equal('http://localhost:3000/foo');});});