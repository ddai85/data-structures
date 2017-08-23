var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var toDelete;
    if (count > 0) {
      toDelete = storage[0];
      for (var i = 0; i < count; i ++) {
        storage[i] = storage[i + 1];
      }
      count--;
      return toDelete;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
