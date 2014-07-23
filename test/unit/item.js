'use strict';
/*global describe, it*/
var expect = require('chai').expect;
var Item = require('../../app/models/item');

describe('Item', function(){
  describe('constructor', function(){
    it('test the creation of items',function(){
      var item1 = new Item('table', 'living room', '07/23/2012', 1, 50);
      expect (item1.name).to.be.a('string');
      expect (item1.room).to.be.a('string');
      expect (item1.dateAcquired).to.be.instanceof(Date);
      expect (item1.count).to.be.a('number');
      expect (item1.cost).to.be.a('number');
      });
   });
});
