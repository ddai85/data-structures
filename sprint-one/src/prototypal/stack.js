var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.



  
  var makeStacks = Object.create(stackMethods);
  makeStacks.count = 0;
  makeStacks.storage = {};
  return makeStacks;


};

var stackMethods = {
  size: function() {
    return this.count;
  }, 
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  }, 
  pop: function() {
    if (this.count > 0) {
      this.count--;
      return this.storage[this.count];
    }
  }
  
};


