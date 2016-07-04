'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _chai=require('chai');
var _news=require('../../src/actions/news');
var _newsFeed=require('../mock/news-feed');

describe('actions for news',function(){
it('refreshes itself',function(){
var action=(0,_news.refresh)();
var expectedNewsItem={
url:'https://saturn.jpl.nasa.gov/system/resources/detail_files/7379_PIA20485_full.jpg',
description:'Bright disruption spotted on Saturn\'s F-ring',
thumbnailSource:'https://b.thumbs.redditmedia.com/MauDRRfm7MaHZLXnV3tPlhLBdjwnpoUHO4zUDfspJdM.jpg',
thumbnailDescription:'Bright disruption spotted on Saturn\'s F-ring'};

var expectedLongNewsItem=_extends({},expectedNewsItem,{
description:
'Bright disruption spotted on Saturn\'s F-ring lkjlkjlkj lkjlkjlkj '+
'lkjlkjlkj lkjlkjlkj lkjlkjfdslkjfkldsjflkjdslkfjdslkjfdslkjflkdsjf'+
'kldsjf lkjlkjlkjlkj'});


(0,_chai.expect)(action.next().value).to.deep.equal({
type:'NEWS_REFRESH',
payload:undefined,
error:null,
meta:{state:'starting'}});


(0,_chai.expect)(action.next().value).to.deep.equal({
type:'FETCH',
meta:{},
error:null,
payload:{
url:_news.refresh.url,
coerceTo:'text',
params:{}}});



(0,_chai.expect)(action.next(_newsFeed.MOCK_NEWS_RSS_FEED).value).to.deep.equal({
type:'TIMEOUT',
meta:{},
error:null,
payload:{timeout:10}});


(0,_chai.expect)(action.next().value).to.deep.equal({
type:'NEWS_REFRESH',
error:null,
meta:{state:'finished'},
payload:[expectedNewsItem,expectedLongNewsItem,expectedNewsItem]});});});