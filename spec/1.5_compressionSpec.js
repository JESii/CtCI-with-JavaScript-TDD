//CtCI 1.5
//  "Implement a method to perform basic string compression using the counts of
//   repeated characters. If the 'compressed' string would not be smaller, then
//   return the original string."
//  Cracking the Coding Interview, p73 

describe("Compress a string", function() {
  it("handles the empty string", function() {
    var cString = new CtciStrings();
    expect(cString.compress('')).toBe('');
  });
  it("returns same string for very short strings", function() {
  var cString = new CtciStrings();
  expect(cString.compress('a')).toBe('a');
  expect(cString.compress('ab')).toBe('ab');
  });
  it("compresses a short string", function() {
  var cString = new CtciStrings();
  expect(cString.compress('aabcccccaaa')).toBe('a2bc5a3');
  });
});
