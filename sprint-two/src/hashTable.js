

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create tuple LimitedArray with length 2 and insert key/value
  var tuple = [k, v];
  
  //at storage_index check if bucket array exists
  if (this._storage.get(index)) {
    //if bucket exists, insert tuple at first 'undefined' space
    var existingBucket = this._storage.get(index);
    for (var i = 0; i < existingBucket.length; i++) {
      var existingTuple = existingBucket[i];
      //check to see if key exists in a tuple already
      if (existingTuple[0] === k) {
        existingTuple[1] = v;
        break;
      }
    }    
    existingBucket.push(tuple);

  } else {
    //else create bucket with length limit
    var bucket = [];
    
    //insert tuple into bucket at first position
    bucket[0] = tuple;
    //insert bucket into storage_index
    this._storage.set(index, bucket);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //index will tell us which bucket array the tuple might be in
  //iterate through bucket array until we find key that matches k
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var searchBucket = this._storage.get(index);

  //  locate the tuple via k and index
  for (var i = 0; i < searchBucket.length; i++) {
    var searchTuple = searchBucket[i];
    if (searchTuple[0] === k) {
      searchBucket[i] = searchBucket[i].splice(i, 1);
      break;
    }
    
    //  set bucket[i] to undefined
  }
    
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


