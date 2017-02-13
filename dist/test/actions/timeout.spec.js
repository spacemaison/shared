'use strict';var _chai=require('chai');
var _timeout=require('../../src/actions/timeout');
var _constants=require('../../src/constants');

describe('actions for timeouts',function(){
it('creates a timeout action',function(){
(0,_chai.expect)((0,_timeout.timeout)(3)).to.deep.equal({
type:_constants.namespace.resolve('timeout'),
payload:{timeout:3},
meta:{},
error:null});});});