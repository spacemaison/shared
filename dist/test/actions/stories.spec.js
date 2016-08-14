'use strict';var _chai=require('chai');
var _StoryContainer=require('../../src/models/StoryContainer');
var _stories=require('../../src/actions/stories');
var _index=require('../../src/actions/index');
var _constants=require('../../src/constants');

describe('actions for stories',function(){
it('refreshes news stories',function(){
var gen=(0,_stories.news)();
var type=_constants.namespace.resolve('stories/news');
var stories=new _StoryContainer.StoryContainer();

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,stories));});


it('refreshes launch stories',function(){
var gen=(0,_stories.launches)();
var type=_constants.namespace.resolve('stories/launches');
var stories=new _StoryContainer.StoryContainer();

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,stories));});


it('refreshes all stories',function(){
var gen=(0,_stories.news)();
var type=_constants.namespace.resolve('stories/news');
var stories=new _StoryContainer.StoryContainer();

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,stories));

gen=(0,_stories.launches)();
type=_constants.namespace.resolve('stories/launches');

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,stories));});});