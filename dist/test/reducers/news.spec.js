'use strict';var _chai=require('chai');
var _news=require('../../src/reducers/news');
var _News=require('../../src/models/News');
var _NewsItem=require('../../src/models/NewsItem');

describe('reducers for news',function(){
it('starts refreshing news items',function(){
var news=new _News.News(false,[new _NewsItem.NewsItem()]);

(0,_chai.expect)((0,_news.refresh)(news,{payload:null,meta:{state:'starting'}})).
to.be.instanceof(_News.News).
and.deep.equal({isRefreshing:true,items:news.items});});


it('finishes refreshing news items',function(){
var payload=[new _NewsItem.NewsItem()];

(0,_chai.expect)((0,_news.refresh)(null,{payload:payload,meta:{state:'finished'}})).
to.be.instanceof(_News.News).
and.deep.equal({isRefreshing:false,items:payload});});});