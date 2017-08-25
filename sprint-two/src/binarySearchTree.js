var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left;
  obj.right;
  
  return obj;
};


BinarySearchTree.prototype.insert = function(value) {
  
  //create new BST based on provided value
  var newNode = BinarySearchTree(value);
  
  //create recursive function to recurse through tree
  var traverse = function(node) {
    
    //check to see if new value less than parent node
    if (value < node.value) {
      //check to see if left node exists
      if (!node.left) {
        //if left node does not exist, assign new node to .left of parent
        node.left = newNode;
      } else {
        //if there is left node, recurse again
        traverse(node.left);
      } 
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        traverse(node.right);
      }
    }
  };
  //run traverse function on tree that insert was called on
  traverse(this);
};

BinarySearchTree.prototype.contains = function(target) {
    
};

BinarySearchTree.prototype.depthFirstLog = function() {
    
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
