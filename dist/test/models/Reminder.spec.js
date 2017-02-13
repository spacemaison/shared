'use strict';
var _chai=require('chai');
var _index=require('../../src/models/index');

describe('Reminder model',function(){
it('coerces LaunchStory models into reminders',function(){
var launch=new _index.LaunchStory({id:1,rocket:{name:'rocket1'}});
var reminder=new _index.Reminder(launch);

(0,_chai.expect)(reminder.id).to.equal(1);
(0,_chai.expect)(reminder.date).to.be.instanceOf(Date);
(0,_chai.expect)(reminder.message).
to.equal('The rocket1 launch window starts in ten minutes');});


it('throw when id < 1 or is a non integer',function(){
(0,_chai.expect)(function(){return new _index.Reminder();}).to.throw(TypeError);
(0,_chai.expect)(function(){return new _index.Reminder({id:'bs'});}).to.throw(TypeError);
(0,_chai.expect)(function(){return new _index.Reminder({id:-2});}).to.throw(TypeError);});});