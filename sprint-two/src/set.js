var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
  //O(1) complexity
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }
  return false;
  //O(N) complexity because of indexOf
};

setPrototype.remove = function(item) {
  this._storage.splice(this._storage.indexOf(item), 1);
  //O(N) complexity because of both splice and indexOf
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
