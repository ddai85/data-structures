var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      if (!this.head) {
        this.head = this.tail;
      }
      this.tail = newNode;
    } else {
      this.tail = Node(value);
    }
  };

  list.removeHead = function() {
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  };

  list.contains = function(target) {
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
