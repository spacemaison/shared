'use strict';
var _chai=require('chai');
var _StoryContainer=require('../../src/models/StoryContainer');
var _rest=require('../../src/reducers/rest');var rest=_interopRequireWildcard(_rest);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

describe('rest reducer',function(){
var type='type';

it('handles starting to reduce json stories',function(){
var reducer=rest.handleJSONArray(type);
var action={type:type,meta:{state:'starting'}};

(0,_chai.expect)(reducer(void 0,action)).to.deep.equal(new _StoryContainer.StoryContainer(true));});


it('handles finishing reducing json stories',function(){
var reducer=rest.handleJSONArray(type);
var action={type:type,payload:[],meta:{state:'finished'}};

(0,_chai.expect)(reducer(void 0,action)).to.deep.equal(new _StoryContainer.StoryContainer(false,[]));});


it('handles json stories error by returning previous story container',function(){
var reducer=rest.handleJSONArray(type);
var action={meta:{state:'error'}};
var previous=new _StoryContainer.StoryContainer();

(0,_chai.expect)(reducer(previous,action)).to.equal(previous);});});