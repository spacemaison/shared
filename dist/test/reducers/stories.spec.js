'use strict';var _chai=require('chai');
var _stories=require('../../src/reducers/stories');
var _index=require('../../src/models/index');
var _actions=require('../../src/actions/actions');

describe('reducers for stories',function(){
it('starts refreshing news stories',function(){
var mock=new _index.StoryContainer(false,[new _index.NewsStory()]);
var type=_actions.NEWS_REFRESH;

(0,_chai.expect)((0,_stories.news)(mock,{type:type,meta:{state:'starting'}})).
to.be.instanceof(_index.StoryContainer).
and.deep.equal({isRefreshing:true,items:mock.items});});


it('finishes refreshing news stories',function(){
var payload=[new _index.NewsStory()];
var type=_actions.NEWS_REFRESH;

(0,_chai.expect)((0,_stories.news)(null,{type:type,payload:payload,meta:{state:'finished'}})).
to.be.instanceof(_index.StoryContainer).
and.deep.equal({isRefreshing:false,items:payload});});


it('starts refreshing launch stories',function(){
var mock=new _index.StoryContainer(false,[new _index.LaunchStory()]);
var type=_actions.LAUNCH_REFRESH;

(0,_chai.expect)((0,_stories.launches)(mock,{type:type,payload:null,meta:{state:'starting'}})).
to.be.instanceof(_index.StoryContainer).
and.deep.equal({isRefreshing:true,items:mock.items});});


it('finishes refreshing launch stories',function(){
var payload=[new _index.LaunchStory()];
var type=_actions.LAUNCH_REFRESH;

(0,_chai.expect)((0,_stories.launches)(null,{type:type,payload:payload,meta:{state:'finished'}})).
to.be.instanceof(_index.StoryContainer).
and.deep.equal({isRefreshing:false,items:payload});});});