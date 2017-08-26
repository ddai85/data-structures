

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  //O(1) complexity
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
  //O(1) complexity
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for (var key in this.storage) {
    if (this.storage[key].hasOwnProperty(node)) {
      delete this.storage[key][node];
    }
  }
  //O(1) for loop is tied to input
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].hasOwnProperty(toNode); 
  //O(1) complexity
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = null;
  this.storage[toNode][fromNode] = null;
  //O(1) complexity
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
  //O(1) complexity
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
  //O(1) complexity
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


