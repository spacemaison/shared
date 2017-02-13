'use strict';
var _chai=require('chai');
var _index=require('../../src/actions/index');
var _StoryContainer=require('../../src/models/StoryContainer');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

describe('restfull actions',function(){
var url='url';

it('gets json array and coerces its items to a model',function(){var
Model=
function Model(){var item=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,Model);
this.data=item.data;};



var wrapper=_index.rest.getJSONArray(Model,url);
var returned=[{data:1}];
var stories=new _StoryContainer.StoryContainer(false,returned);

var gen=wrapper();

(0,_chai.expect)(gen.next().value).to.deep.equal(_index.actions.starting(url));
(0,_chai.expect)(gen.next().value).to.deep.equal(_index.fetch.json(url));
(0,_chai.expect)(gen.next(returned).value).to.deep.equal(_index.timeouts.timeout(1));

var processed=gen.next().value;

(0,_chai.expect)(processed).to.deep.equal(_index.actions.finished(url,stories));
(0,_chai.expect)(processed.payload.items.every(function(item){return item instanceof Model;})).
to.be.true;});});