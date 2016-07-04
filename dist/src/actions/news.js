'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.








refresh=refresh;var _cheerio=require('cheerio');var _cheerio2=_interopRequireDefault(_cheerio);var _actions=require('./actions');var _index=require('./index');var _NewsItem=require('../models/NewsItem');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[refresh].map(regeneratorRuntime.mark);function refresh(){var feedURL=arguments.length<=0||arguments[0]===undefined?refresh.url:arguments[0];var



rssText,
$rss,
$entries;return regeneratorRuntime.wrap(function refresh$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _index.actions.starting(_actions.NEWS_REFRESH);case 3:_context.next=5;return _index.fetch.text(feedURL);case 5:rssText=_context.sent;$rss=_cheerio2.default.load(rssText,{xmlMode:true,withDomLvl1:true});$entries=$rss('entry');_context.next=10;return(

_index.timeouts.timeout(10));case 10:_context.next=12;return(

_index.actions.finished(_actions.NEWS_REFRESH,$entries.toArray().map(function(entry){
var $entry=(0,_cheerio2.default)(entry);
var $content=_cheerio2.default.load($entry.find('content').text());
var $thumbnail=$content('img');

var url=$content('a').
filter(function(i,el){return(0,_cheerio2.default)(el).text()==='[link]';}).
attr('href');
var description=$entry.find('title').text();
var thumbnailSource=$thumbnail.attr('src');
var thumbnailDescription=$thumbnail.attr('alt');

return new _NewsItem.NewsItem(
url,description,thumbnailSource,thumbnailDescription);})));case 12:return _context.abrupt('return',_context.sent);case 15:_context.prev=15;_context.t0=_context['catch'](0);_context.next=19;return(


_index.actions.action(_actions.NEWS_REFRESH,_context.t0));case 19:return _context.abrupt('return',_context.sent);case 20:case'end':return _context.stop();}}},_marked[0],this,[[0,15]]);}



refresh.url='https://www.reddit.com/r/spacex+space+nasa/.rss';