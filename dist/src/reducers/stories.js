'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.



news=news;exports.



launches=launches;var _StoryContainer=require('../models/StoryContainer');var _actions=require('../actions/actions');var _action=require('../actions/action');function news(){var news=arguments.length<=0||arguments[0]===undefined?new _StoryContainer.StoryContainer():arguments[0];var action=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return handleStoryType(_actions.NEWS_REFRESH,news,action);}function launches(){var launches=arguments.length<=0||arguments[0]===undefined?new _StoryContainer.StoryContainer():arguments[0];var action=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
return handleStoryType(_actions.LAUNCH_REFRESH,launches,action);}


function handleStoryType(storyType,stories,action){var
type=action.type;var payload=action.payload;var meta=action.meta;

if(type!==storyType)return stories;

switch(meta.state){
case _action.states.error:return stories;
case _action.states.starting:return new _StoryContainer.StoryContainer(true,stories.items);
case _action.states.finished:return new _StoryContainer.StoryContainer(false,payload);}}