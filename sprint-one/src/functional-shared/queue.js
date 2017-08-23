var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var sharedMethods = {};
  sharedMethods.count = 0;
  sharedMethods.storage = {};
  _.extend(sharedMethods, queueMethods);
  
  return sharedMethods;

};

var queueMethods = {
  
  size: function() {
    return this.count;
  },
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count > 0) {
      this.count--;
      var toDelete = this.storage[0];
      // for (var i = 0; i < this.count; i++) {
      //   this.storage[this.count] = this.storage[this.count + 1];         
      // }
      return toDelete;
    }
  }
  
};


