alert("LinkedLists init");

var LinkedList = (function() {
  var self = {
    listStart: { value: null, next: null },
    listEnd:  {},
    numNodes: 0
  };

  LinkedList = function() {
    return this;
  }
  LinkedList.prototype = {
    addNode: function(value) {
      self.listEnd.next = new ListNode(value);
      self.listEnd = self.listEnd.next;
      ++self.numNodes;
      return self.listEnd;
    },
    numNodes: function() {
      return self.numNodes;
    }
  };
  return LinkedList;
})();

var ListNode = (function(value) {
  var self = {
    value: null,
    next: null
  };
  ListNode = function(value) {
    self.value = value;
    self.next = null;
    return this;
  }
  ListNode.prototype = {
    value: function() {
      return self.value;
    },
    next: function() {
      return self.next;
    }
  }
  return ListNode;
})();
