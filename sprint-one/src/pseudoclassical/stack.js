var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var makeStacks = Object.create(Stack.prototype);
  makeStacks.count = 0;
  return makeStacks;
};

Stack.prototype.size = function() {
  return this.count;
};
Stack.prototype.push = function(value) {
  this.count++;
};

