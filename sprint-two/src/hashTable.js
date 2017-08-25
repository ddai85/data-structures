

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create tuple LimitedArray with length 2 and insert key/value
  var tuple = LimitedArray(2);
  tuple.set(0, k);
  tuple.set(1, v);
  
  //at storage_index check if bucket array exists
  if (this._storage.get(index)) {
    //if bucket exists, insert tuple at first 'undefined' space
    var existingBucket = this._storage.get(index);
    for (var i = 0; i < this._limit; i++) {
      var existingTuple = existingBucket.get(i);
      //check to see if key exists in a tuple already
      if (!existingBucket.get(i)) {
        existingBucket.set(0, tuple);
        break;
      }
      if (existingTuple.get(0) === k) {
        existingTuple.set(1, v);
        break;
      }

    }  
  } else {
    //else create bucket with length limit
    var bucket = LimitedArray(this._limit);
    
    //insert tuple into bucket at first position
    bucket.set(0, tuple);
    //insert bucket into storage_index
    this._storage.set(index, bucket);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //index will tell us which bucket array the tuple might be in
  //iterate through bucket array until we find key that matches k
  var bucket = this._storage.get(index);
  for (var i = 0; i < this._limit; i++) {
    var tuple = bucket.get(i);
    if (!bucket.get(i)) {
      continue;
    }
    if (tuple.get(0) === k) {
      return tuple.get(1);
    }
  }
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var searchBucket = this._storage.get(index);
  
  debugger;
  //  locate the tuple via k and index
  for (var i = 0; i < this._limit; i++) {
    var searchTuple = searchBucket.get(i);
    if (searchTuple.get(0) === k) {
      searchBucket.set(i, undefined);
      break;
    }
    
    //  set bucket[i] to undefined
  }
    
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


