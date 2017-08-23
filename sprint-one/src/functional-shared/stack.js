var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someMethod = {};
  someMethod.count = 0;
  _.extend(someMethod, stackMethods);
  return someMethod;
};


var stackMethods = {
  size: function() {
    return this.count;
  },
  push: function(value) {
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
    }
  }
  
  
  
  
};


