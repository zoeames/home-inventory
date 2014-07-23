/* jshint expr:true */
'use strict';
/*global describe, it, before, after, beforeEach, afterEach*/

var expect = require('chai').expect;
var  Item;
var connect = require('../../app/lib/mongodb');


describe('Item', function(){
  before(function(done){
 connect('home-inventory-test', function(){
   Item = require('../../app/models/item');
   done();
    });
  });
/*
  beforeEach(function(){
  console.log('i am in the before each block');
  });

  after(function(){
  console.log('i am in the after block');
  });
  
  afterEach(function(){
  console.log('i am in the after each block');
  });
*/
  describe('constructor', function(){
    it('test the creation of items',function(){
      console.log(global.mongodb);
      var item1 = new Item('table', 'living room', '07/23/2012', 1, 50);
      expect (item1.name).to.be.a('string');
      expect (item1.room).to.be.a('string');
      expect (item1.dateAcquired).to.be.instanceof(Date);
      expect (item1.count).to.be.a('number');
      expect (item1.cost).to.be.a('number');
      });
   });
  describe('#save', function(){
    it('should save an item to the mongo databse',function(done){
      var table = new Item('table', 'living room', '07/23/2012', 1, 50);
      table.save(function (){
        expect(table._id).to.be.ok;
        done();
      });
    });
  });
});
