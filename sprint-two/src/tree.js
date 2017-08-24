var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
  
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childObject = {};
  childObject.value = value;
  
  this.children.push(childObject);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
