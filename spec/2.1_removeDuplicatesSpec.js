//CtCI 2.1
//  "Implement a method to remove duplicates in an unsorted linked list"
//  Cracking the Coding Interview, p77
//  
//  Also used this coding challenge to investigate the use of the
//  so-called "JavaScript Module Pattern" (see 
//  http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
//  for a good description. This pattern allows for public/private variables
//  and methods in JavaScript, to emulate the class pattern in other languages.


describe("Linked lists", function() {
  var cList, cNode;
  describe('Create Nodes', function() {
    it("creates a single node", function() {
      cNode = new ListNode('item 1');
      expect(cNode).toBeDefined();
      expect(cNode.value).toEqual('item 1');
      expect(cNode.next).toBeNull;
    });
    it("creates mltiple nodes", function() {
      var n1 = new ListNode('item1');
      var n2 = new ListNode('item2');
      expect(n1.value).toEqual('item1');
      expect(n2.value).toEqual('item2');
    });
    it("links two nodes", function() {
      var n1 = new ListNode('item1');
      var n2 = new ListNode('item2');
      n1.next = n2;
      expect(n1.next.value).toEqual('item2');
    });
  });
describe("Create List", function() {
  beforeEach(function() {
    cList = new LinkedList();
  });
  it("is properly initialized", function() {
    expect(cList.head()).toBeNull();
    expect(cList.tail()).toBeNull();
    expect(cList.numNodes()).toEqual(0);
  });
  it("adds a node", function() { 
    cList.addNode('item1');
    expect(cList.numNodes()).toEqual(1);
    expect(cList.head()).toEqual(cList.tail());
    expect(cList.head().value).toEqual('item1');
    expect(cList.tail().value).toEqual('item1');
  });
  it("adds a second node", function() {
    cList.addNode('item1');
    cList.addNode('item2');
    console.log(cList.head().value);
    console.log(cList.tail().value);
    expect(cList.numNodes()).toEqual(2);
    expect(cList.head().value).toEqual('item1');
    expect(cList.tail().value).toEqual('item2');
  });
  it("keeps track of nodes", function() {
    expect(cList.numNodes()).toEqual(0);
    cList.addNode('item1');
    expect(cList.numNodes()).toEqual(1);
    cList.addNode('item2');
    expect(cList.numNodes()).toEqual(2)
  });
  it('keeps private data private', function() {
    expect(cList.listStart).not.toBeDefined();
    expect(cList.listEnd).not.toBeDefined();
    expect(cList.listNodes).not.toBeDefined();
  });
  it('adds multiple nodes', function() {
    cList.addNode('item1');
    expect(cList.addNode('item2').value).toEqual('item2');
    expect(cList.head().value).toEqual('item1');
    expect(cList.tail().value).toEqual('item2');
    cList.addNode('entry4');
    cList.addNode('entry0');
    expect(cList.head().value).toEqual('item1');
    expect(cList.tail().value).toEqual('entry0');
  });
});
describe("Remove duplicates", function() {
});
});
