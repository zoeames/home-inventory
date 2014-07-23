'use strict';

function Item(name, room, dateAcquired, count, cost){
  this.name = name;
  this.room = room;
  this.dateAcquired = new Date(dateAcquired);
  this.count = parseInt(count);
  this.cost = parseInt(cost);

}

module.exports = Item;
