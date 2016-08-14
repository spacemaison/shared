'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.








refresh=refresh;var _actions=require('./actions');var _index=require('./index');var _constants=require('../constants');var _Stories=require('../models/Stories');var _marked=[refresh].map(regeneratorRuntime.mark);function refresh(){var feedURL=arguments.length<=0||arguments[0]===undefined?refresh.url:arguments[0];var



stories;return regeneratorRuntime.wrap(function refresh$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _index.actions.starting(_actions.NEWS_REFRESH);case 3:_context.next=5;return _index.fetch.json(feedURL);case 5:stories=_context.sent;_context.next=8;return(

_index.timeouts.timeout(10));case 8:return _context.abrupt('return',

new _Stories.Stories(stories));case 11:_context.prev=11;_context.t0=_context['catch'](0);_context.next=15;return(

_index.actions.action(_actions.NEWS_REFRESH,_context.t0));case 15:return _context.abrupt('return',_context.sent);case 16:case'end':return _context.stop();}}},_marked[0],this,[[0,11]]);}



refresh.url=_constants.NEWS_URL;