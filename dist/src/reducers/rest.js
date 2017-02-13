'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.


handleJSONArray=handleJSONArray;var _StoryContainer=require('../models/StoryContainer');var _action=require('../actions/action');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function handleJSONArray(storyType){
return function(){var stories=arguments.length<=0||arguments[0]===undefined?new _StoryContainer.StoryContainer():arguments[0];var action=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var
type=action.type;var payload=action.payload;var meta=action.meta;

if(type!==storyType)return stories;

switch(meta.state){
case _action.states.error:return stories;
case _action.states.starting:return new _StoryContainer.StoryContainer(true,[].concat(_toConsumableArray(stories)));
case _action.states.finished:return new _StoryContainer.StoryContainer(false,[].concat(_toConsumableArray(payload)));}};}