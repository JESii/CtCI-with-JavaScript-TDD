// CtCI 1.1
//   "Implement an algorithm to determine if a string has all unique characters.
//    What if you cannot use additional data structures?"
//   Cracking the Coding Interview, p73 

describe("CtCI 1.1 - Test for string uniqueness", function() {
  var ctciStrings = new CtciStrings();

  it("handles the empty string", function() {
    expect(ctciStrings.uniqueString('')).toBe(true);
  });

  it("handles a string with one duplication", function() {
    expect(ctciStrings.uniqueString('aa')).toBe(false);
  });

  it("handles a long string with no duplication", function() {
    expect(ctciStrings.uniqueString('abcdefghijk')).toBe(true);
  });

  it("handles a long string with some duplication", function() {
    expect(ctciStrings.uniqueString('abcdkefdghijk')).toBe(false);
  });
});
