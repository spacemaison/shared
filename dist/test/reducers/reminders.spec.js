'use strict';
var _chai=require('chai');
var _constants=require('../../src/constants');
var _reminders=require('../../src/reducers/reminders');var _reminders2=_interopRequireDefault(_reminders);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('reminders reducers',function(){
it('adds a reminder',function(){
var action={
type:_constants.namespace.resolve('reminders/add'),
payload:{id:1}};


(0,_chai.expect)((0,_reminders2.default)([{id:1}],action)).
to.deep.equal([action.payload]);});


it('removes a reminder',function(){
var action={
type:_constants.namespace.resolve('reminders/remove'),
payload:{id:1}};


(0,_chai.expect)((0,_reminders2.default)([{id:1}],action)).to.have.lengthOf(0);});


it('updates a reminder',function(){
var action={
type:_constants.namespace.resolve('reminders/add'),
payload:{id:1}};


(0,_chai.expect)((0,_reminders2.default)([{id:1}],action)).
to.deep.equal([action.payload]).and.
have.lengthOf(1);});});