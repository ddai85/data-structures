var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // declare new node to add
    var newNode = Node(value);
    
    //  add new node to tail if there's a list
    if (this.tail) {
      // point old tail to new tail
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      //  if there's list create node that is both head and tail
      this.tail = newNode;
      this.head = newNode;
    }
  };

  list.removeHead = function() {
    var oldHead = this.head;
    this.head = oldHead.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var start = this.head;
    if (target === this.tail.value) {
      return true;
    } 
    while (start.next !== null) {
      if (target === start.value) {
        return true;
      }
      start = start.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
