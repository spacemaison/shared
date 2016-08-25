'use strict';var _chai=require('chai');
var _StoryContainer=require('../../src/models/StoryContainer');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}

describe('StoryContainer model',function(){
it('spreads items in the container',function(){
(0,_chai.expect)([].concat(_toConsumableArray(new _StoryContainer.StoryContainer(false,[1,2,3])))).to.deep.equal([1,2,3]);});});