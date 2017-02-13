'use strict';
var _chai=require('chai');
var _StoryContainer=require('../../src/models/StoryContainer');
var _LaunchStory=require('../../src/models/LaunchStory');
var _stories=require('../../src/actions/stories');
var _index=require('../../src/actions/index');
var _constants=require('../../src/constants');

describe('actions for stories',function(){
it('refreshes featured stories',function(){
var gen=(0,_stories.featured)();
var type=_constants.namespace.resolve('stories/featured');
var stories=new _StoryContainer.StoryContainer();

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next([]).value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,stories));});


it('refreshes news stories',function(){
var gen=(0,_stories.news)();
var type=_constants.namespace.resolve('stories/news');
var stories=new _StoryContainer.StoryContainer();

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next([]).value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,stories));});


it('refreshes launch stories',function(){
var gen=(0,_stories.launches)();
var storyType=_constants.namespace.resolve('stories/launches');
var story=new _LaunchStory.LaunchStory({id:1,missions:[{name:'mission'}]});
var stories=[story];
var container=new _StoryContainer.StoryContainer(false,stories);

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(storyType));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(storyType));
(0,_chai.expect)(gen.next(stories).value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(storyType,container));});


it('refreshes all stories',function(){
var gen=(0,_stories.stories)();
var type=_constants.namespace.resolve('stories/featured');
var container=new _StoryContainer.StoryContainer();

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next([]).value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,container));

type=_constants.namespace.resolve('stories/news');

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next([]).value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,container));

type=_constants.namespace.resolve('stories/launches');

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(type));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(type));
(0,_chai.expect)(gen.next([]).value).to.deep.equal(_index.timeouts.timeout(1));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.finished(type,container));});});