/* jshint expr:true */
'use strict';
/*global describe, it, before, beforeEach*/

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var  Item;


describe('Item', function(){
  before(function(done){
    connect('home-inventory-test', function(){
      Item = require('../../app/models/item');
      done();
    });
  });

  beforeEach(function(done){
    global.mongodb.collection('items').remove(function(){
      done();
    });
  });

  describe('constructor', function(){
    it('test the creation of items',function(){
      //console.log(global.mongodb);
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
        expect(table._id).to.be.instanceof(Mongo.ObjectID);
        done();
      });
    });
  });
  describe('.find', function(){
    it('should find all the items from the mongo databse',function(done){
      var table = new Item('table', 'living room', '07/23/2012', 1, 50);
      table.save(function (){
         Item.find({name:'table'},function(items){
          expect(items).to.have.length(1);
           done();
         });
      });
    });
  });
    it('should find a single item from the mongo databse',function(done){
      var table = new Item('table', 'living room', '07/23/2012', 1, 50);
      var couch = new Item('couch', 'living room', '07/23/2012', 1, 50);
      var chair = new Item('chair', 'living room', '07/23/2012', 1, 50);
      var bed   = new Item('bed', 'living room', '07/23/2012', 1, 50);
      table.save(function(){
       
      });
      couch.save(function(){
        
        });
      chair.save(function(){
         
        });
      bed.save(function (){
       
        });
         Item.find({name:'couch'}, function(items){
         console.log(items);
           expect(items).to.have.length(1);
           expect(items[0].name).to.equal('couch');
           done();
      });
    });
  });
