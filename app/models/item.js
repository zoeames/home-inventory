'use strict';

var cItem = global.mongodb.collection('items');

function Item(name, room, dateAcquired, count, cost){
  this.name = name;
  this.room = room;
  this.dateAcquired = new Date(dateAcquired);
  this.count = parseInt(count);
  this.cost = parseInt(cost);

}

Item.prototype.save = function(cb){
cItem.save(this, function(err, object){
cb();
});
};


module.exports = Item;
