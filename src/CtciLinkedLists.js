var LinkedList = (function() {
  var self = {
    listStart: null,
    listEnd:  null,
    listNodes: 0
  };

  LinkedList = function(value) {
    self.listStart = null;
    self.listEnd = null;
    self.listNodes = 0;
    return this;
  }
  LinkedList.prototype = {
    addNode: function(value) {
      var node = new ListNode(value);
      if(self.listStart == null) {
        self.listStart = node;
        self.listEnd = node;
      } else {
        self.listEnd.next = node;
        self.listEnd = node;
      }
      self.listNodes++;
      return self.listEnd;
    },
    numNodes: function() {
      return self.listNodes;
    },
    head: function() {
      return self.listStart;
    },
    tail: function() {
      return self.listEnd;
    }
  };
  return LinkedList;
})();

var ListNode = (function(value) {
  ListNode = function(value) {
    this.value = value;
    this.next = null;
    return this;
  }
  return ListNode;
})();
