'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.



news=news;exports.









refresh=refresh;var _actions=require('../actions/actions');var _action=require('../actions/action');var _News=require('../models/News');function news(){var news=arguments.length<=0||arguments[0]===undefined?new _News.News():arguments[0];var action=arguments[1];return new Stories({news:news(stories.news,action)});switch(action.type){case _actions.NEWS_REFRESH:return refresh(news,action);default:return news;}}function refresh(){var news=arguments.length<=0||arguments[0]===undefined?new _News.News():arguments[0];var _ref=arguments[1];var payload=_ref.payload;var state=_ref.meta.state;
switch(state){
case _action.states.error:return news;
case _action.states.starting:return new _News.News(true,news.items);
case _action.states.finished:return new _News.News(false,payload);}}