'use strict';var _chai=require('chai');
var _fetch=require('../../src/actions/fetch');

describe('actions for fetching content,',function(){
it('creates fetch actions',function(){
var url='http://nonexistent';
var params={};

(0,_chai.expect)((0,_fetch.fetch)(url,params,'invalid')).to.deep.equal({
type:'FETCH',
meta:{},
error:null,
payload:{url:url,params:params,coerceTo:null}});


(0,_chai.expect)((0,_fetch.fetch)(url,params,'blob')).to.deep.equal({
type:'FETCH',
meta:{},
error:null,
payload:{url:url,params:params,coerceTo:'blob'}});});



it('creates text fetch actions',function(){
var url='http://nonexistent';
var params={};

(0,_chai.expect)((0,_fetch.text)(url,params)).to.deep.equal({
type:'FETCH',
meta:{},
error:null,
payload:{url:url,params:params,coerceTo:'text'}});});



it('creates json fetch actions',function(){
var url='http://nonexistent';
var params={};

(0,_chai.expect)((0,_fetch.json)(url,params)).to.deep.equal({
type:'FETCH',
meta:{},
error:null,
payload:{url:url,params:params,coerceTo:'json'}});});



it('creates post actions',function(){
var url='http://nonexistent';
var body='';

(0,_chai.expect)((0,_fetch.post)(url,body)).to.deep.equal({
type:'FETCH',
meta:{},
error:null,
payload:{url:url,params:{method:'POST',body:body},coerceTo:null}});});



it('creates json post actions',function(){
var url='http://nonexistent';
var body={foo:'bar'};

(0,_chai.expect)((0,_fetch.postJSON)(url,body)).to.deep.equal({
type:'FETCH',
meta:{},
error:null,
payload:{
url:url,
coerceTo:null,
params:{
method:'POST',
body:'{"foo":"bar"}',
headers:{
'Accept':'application/json',
'Content-Type':'application/json'}}}});});});