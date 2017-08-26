

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (k === undefined) {
    return null;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create tuple LimitedArray with length 2 and insert key/value
  var tuple = [k, v];
  
  //at storage_index check if bucket array exists
  if (this._storage.get(index)) {
    var existingBucket = this._storage.get(index);
    //iterate over existing tuples to check if key exists
    for (var i = 0; i < existingBucket.length; i++) {
      var existingTuple = existingBucket[i];
      //if key exists, replace property value of key
      if (existingTuple[0] === k) {
        existingTuple[1] = v;
        break;
      }
    }    
    //if key doesn't exist already, create new tuple
    existingBucket.push(tuple);
    this._count++;
  } else {
    //else create bucket with length limit
    var bucket = [];
    
    //insert tuple into bucket at first position
    bucket[0] = tuple;
    this._count++;
    //insert bucket into storage_index
    this._storage.set(index, bucket);
  }
  
  if (this._count > (this._limit * 0.75)) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  if (k === undefined) {
    return null;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);

  //index will tell us which bucket array the tuple might be in
  //iterate through bucket array until we find key that matches k
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
    return undefined;
  } 
  return undefined;
};

HashTable.prototype.remove = function(k) {
  if (k === undefined) {
    return null;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var searchBucket = this._storage.get(index);

  //  locate the tuple via k and index
  if (searchBucket) {
    for (var i = 0; i < searchBucket.length; i++) {
      var searchTuple = searchBucket[i];
      if (searchTuple[0] === k) {
        searchBucket[i][1] = undefined;
        this._count--;
        break;
      }
      
      //  set bucket[i] to undefined
    }
  }

  if (this._count < (this._limit * 0.25) && this._limit > 8) {
    this.resize(this._limit * 0.5);
  }
    
};

HashTable.prototype.resize = function(newSize) {
  
  newHashTable = new HashTable();
  newHashTable._limit = newSize;
  newHashTable._storage = LimitedArray(newSize);

  //iterate over this.storage to get all buckets
  for (var i = 0; i < this._limit; i++) {
    //iterate over all buckets to get all tuples
    if (this._storage.get(i)) {
      var bucket = this._storage.get(i);
      //.insert tuples into newHashTable
      for (var j = 0; j < bucket.length; j++) {
        newHashTable.insert(bucket[j][0], bucket[j][1]);
        bucket.slice(j, 1);  
      }
    }  
  }
      
  //hashTable = newHashTable;
  this._storage = newHashTable._storage;
  this._limit = newSize;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


