//CtCI 2.1
//  "Implement a method to remove duplicates in an unsorted linked list"
//  Cracking the Coding Interview, p77

alert("Duplicates spec");
describe("Linked lists", function() {
var cList, cNode;
  describe("Create list items", function() {
    beforeEach(function() {
      cList = new LinkedList();
    });
    it("creates a single node", function() {
      cNode = new ListNode('item 1');
      expect(cNode).toBeDefined();
      expect(cNode.value()).toEqual('item 1');
      expect(cNode.next()).toBeNull;
    });
    it("adds a second node", function() { 
      cList.addNode('item1');
      expect(cList.addNode('item2')).toBeDefined();
      expect(cList.numNodes()).toEqual(2);
    });
    it('traverses the list', function() {
    cList.addNode('item1');
    cList.addNode('item2');
    cList.addNode('entry4');
    cList.addNode('entry0');
    });
  });
  describe("Remove duplicates", function() {
  });
});
