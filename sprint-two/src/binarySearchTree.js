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
  //  recursive search function that searches nodes
  var search = function(node) {
    // if node.value === target

    if (node.value === target) {
      //  return true;
      return true;
    } else {
      //  compare target with node value
      if (target < node.value) {
        // recurse down left if target is less, right if greater
        if (node.left) {
          return search(node.left);
        } else {
          return false;
        }
      } else {
        if (node.right) {
          return search(node.right);
        } else {
          //  if branch we want is undefined
          //  return false;
          return false;
        }
      }
    }
  };
  return search(this);
};

BinarySearchTree.prototype.depthFirstLog = function() {
  
  //var 
    
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
