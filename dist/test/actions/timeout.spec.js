'use strict';var _chai=require('chai');
var _timeout=require('../../src/actions/timeout');

describe('actions for timeouts',function(){
it('creates a timeout action',function(){
(0,_chai.expect)((0,_timeout.timeout)(3)).to.deep.equal({
type:'TIMEOUT',
payload:{timeout:3},
meta:{},
error:null});});});