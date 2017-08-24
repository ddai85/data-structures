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
  var childObject = Tree(value);
  this.children.push(childObject);
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (target === this.children[i].value) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 linear n
 */
