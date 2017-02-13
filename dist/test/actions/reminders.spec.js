'use strict';

var _chai=require('chai');
var _reminders=require('../../src/actions/reminders');var reminders=_interopRequireWildcard(_reminders);
var _actions=require('../../src/actions/actions');var actions=_interopRequireWildcard(_actions);
var _index=require('../../src/models/index');
var _constants=require('../../src/constants');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

describe('actions for reminders',function(){
it('adds a reminder',function(){
var reminder=new _index.Reminder({id:1});

var gen=reminders.addReminder(reminder,notifier);

gen.next();

(0,_chai.expect)(gen.next(reminder).value).to.deep.equal({
type:_constants.namespace.resolve('reminders/add'),
payload:reminder,
meta:{},
error:null});});



it('adds a reminder, but fails after notifier error',function(){
var reminder=new _index.Reminder({id:1});
var error=new Error();
var notifier={add:function add(){throw error;}};

var gen=reminders.addReminder(reminder,notifier);

(0,_chai.expect)(gen.next().value).to.deep.equal({
type:_constants.namespace.resolve('reminders/add'),
payload:null,
meta:{state:'error'},
error:error});});



it('removes a reminder',function(){
var reminder=new _index.Reminder({id:1});

var gen=reminders.removeReminder(reminder,notifier);

gen.next();

(0,_chai.expect)(gen.next(reminder).value).to.deep.equal({
type:actions.REMINDER_REMOVE,
payload:reminder,
meta:{},
error:null});});



it('removes a reminder, but fails after notifier error',function(){
var reminder=new _index.Reminder({id:1});
var error=new Error();
var notifier={remove:function remove(){throw error;}};

var gen=reminders.removeReminder(reminder,notifier);

(0,_chai.expect)(gen.next().value).to.deep.equal({
type:actions.REMINDER_REMOVE,
payload:null,
meta:{state:'error'},
error:error});});



it('updates a reminder',function(){
var reminder=new _index.Reminder({id:1});

var gen=reminders.updateReminder(reminder,notifier);

gen.next();

(0,_chai.expect)(gen.next(reminder).value).to.deep.equal({
type:_constants.namespace.resolve('reminders/add'),
payload:reminder,
meta:{},
error:null});});



it('updates a reminder, but fails after notifier error',function(){
var reminder=new _index.Reminder({id:1});
var error=new Error();
var notifier={update:function update(){throw error;}};

var gen=reminders.updateReminder(reminder,notifier);

(0,_chai.expect)(gen.next().value).to.deep.equal({
type:_constants.namespace.resolve('reminders/add'),
payload:null,
meta:{state:'error'},
error:error});});



var notifier={
add:function add(){},
remove:function remove(){},
update:function update(){},
toggle:function toggle(){}};});