'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _mocks;exports.default=



interceptFetch;var _actions=require('../actions/actions');var _constants=require('../constants');var _index=require('../models/index');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function interceptFetch(_ref){var dispatch=_ref.dispatch;var getState=_ref.getState;
return function(next){return function(action){var _ref2=
action||{};var type=_ref2.type;var _ref2$payload=_ref2.payload;var payload=_ref2$payload===undefined?{}:_ref2$payload;

return type===_actions.FETCH?
Promise.resolve(mocks[payload.url]):
next(action);};};}



var mocks=(_mocks={},_defineProperty(_mocks,_constants.LAUNCH_URL,
[
{
"description":"A United Launch Alliance Atlas 5 rocket, designated AV-065, will launch a classified spacecraft payload for the U.S. National Reconnaissance Office. The rocket will fly in the 421 vehicle configuration with a four-meter fairing, two solid rocket boosters and a single-engine Centaur upper stage. Delayed from April 21, June 14 and June 24. Moved forward from July 29. [June 1]",
"location":"SLC-41, Cape Canaveral Air Force Station, Florida",
"mission":"NROL-61",
"rocket":"Atlas 5",
"time":"2016-07-28T14:00:00.000Z"},

{
"description":"A SpaceX Falcon 9 rocket will launch the 11th Dragon spacecraft on the ninth operational cargo delivery mission to the International Space Station. The flight is being conducted under the Commercial Resupply Services contract with NASA. Delayed from Dec. 9, June 24, June 27 and July 16. [June 23]",
"location":"SLC-40, Cape Canaveral Air Force Station, Florida",
"mission":"SpaceX CRS 9",
"rocket":"Falcon 9",
"time":"2016-07-18T18:45:00.000Z"},

{
"description":"A Russian government Soyuz rocket will launch the 64th Progress cargo delivery ship to the International Space Station. Delayed from April 22, July 4 and July 7. [June 7]",
"location":"Baikonur Cosmodrome, Kazakhstan",
"mission":"Progress 64P",
"rocket":"Soyuz",
"time":"2016-07-17T11:41:00.000Z"}]),_defineProperty(_mocks,_constants.NEWS_URL,


[
{
"url":"https:\/\/www.reddit.com\/r\/spacex\/comments\/4y3bg0\/bfrmct_a_more_realistic_analysis_v12_now_with\/",
"description":"BFR\/MCT: A More Realistic Analysis, v1.2 (now with composites!)",
"thumbnailSource":"",
"thumbnailDescription":""},

{
"url":"http:\/\/arstechnica.com\/science\/2016\/08\/spacex-reportedly-signs-multibillion-deal-for-carbon-fiber-composites\/",
"description":"He must be serious about Mars: Elon Musk invests $2 billion in carbon fibers",
"thumbnailSource":"https:\/\/b.thumbs.redditmedia.com\/iLvTbkf5UqsjUTMFrmLOo_w_o25eaC6SVWNi1oTmFJA.jpg",
"thumbnailDescription":"He must be serious about Mars: Elon Musk invests $2 billion in carbon fibers"},

{
"url":"http:\/\/www.nasa.gov\/press-release\/nasa-television-airs-journey-to-mars-showcase-rocket-engine-test",
"description":"NASA Television Airs Journey to Mars Showcase, Rocket Engine Test - Thursday, Aug. 18",
"thumbnailSource":"https:\/\/a.thumbs.redditmedia.com\/ziPqRzYm6oVKFf3jgGPTFe6d1K1dZgT029vpEzQOXG0.jpg",
"thumbnailDescription":"NASA Television Airs Journey to Mars Showcase, Rocket Engine Test - Thursday, Aug. 18"},

{
"url":"http:\/\/www.theverge.com\/2016\/8\/16\/12490008\/nasa-iss-new-international-docking-adapter-watch-live",
"description":"NASA astronauts will install a new dock to the International Space Station this Friday",
"thumbnailSource":"https:\/\/b.thumbs.redditmedia.com\/PdqXZTxvKSe3YdJvNsqprDIuZWGtHd4ftFI4-F2obyY.jpg",
"thumbnailDescription":"NASA astronauts will install a new dock to the International Space Station this Friday"},

{
"url":"https:\/\/twitter.com\/arianespaceceo\/status\/765612192859320322",
"description":'Ariane 5 is looking good! The #VA232 team is putting their “signature” touch on the heavy-lift launcher [More info in comments](x-post /r/Arianespace)',
"thumbnailSource":"https:\/\/b.thumbs.redditmedia.com\/BGV4H4DSZHaIYkb7TjiLWLFLVeav7wsRv_Sie1ZwMIY.jpg",
"thumbnailDescription":'Ariane 5 is looking good! The #VA232 team is putting their “signature” touch on the heavy-lift launcher [More info in comments](x-post /r/Arianespace)'},

{
"url":"http:\/\/phys.org\/news\/2016-08-earth-like-planet-proxima-centauri.html",
"description":"Earth-Like Planet Discovered around Proxima Centauri",
"thumbnailSource":"https:\/\/b.thumbs.redditmedia.com\/wBVHaFiNf_COmpx-5dqjnoO7cHt-bxg_HWhfqvO0bHU.jpg",
"thumbnailDescription":"Earth-Like Planet Discovered around Proxima Centauri"},

{
"url":"http:\/\/www.nzherald.co.nz\/world\/news\/article.cfm?c_id=2&objectid=11693703",
"description":"Mystery object in weird orbit beyond Neptune has astronomers puzzled - World - NZ Herald News",
"thumbnailSource":"https:\/\/b.thumbs.redditmedia.com\/1zQWBeZPjynEgWmRR80-2rBJYKRc1--SUKZOIswfCdo.jpg",
"thumbnailDescription":"Mystery object in weird orbit beyond Neptune has astronomers puzzled - World - NZ Herald News"}]),_mocks);