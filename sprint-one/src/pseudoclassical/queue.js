var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.count = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.count;
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count--;
    var toDelete = this.storage[0];
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return toDelete;
  }
};


