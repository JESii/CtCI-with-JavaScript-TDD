//CtCI 1.4
//  "Replace all spaces in a string with '%20'"
//  Cracking the Coding Interview, p73

describe("Spacify a string", function() {
  it("handles the null string", function() {
    cString = new CtciStrings();
    expect(cString.spacify('')).toBe('');
  });
  it("handles a single-character blank string", function() {
    cString = new CtciStrings();
    expect(cString.spacify(' ')).toBe('%20');
  });
  it("handles a single-charcter non-blank string", function() {
    cString = new CtciStrings();
    expect(cString.spacify('a')).toBe('a');
  });
  it("handles a multi-character string", function() {
  cString = new CtciStrings();
  expect(cString.spacify('abc def')).toBe('abc%20def');
  });
  it("handles leading/trailing spaces", function() {
  cString = new CtciStrings();
  expect(cString.spacify(' abc def ')).toBe('%20abc%20def%20');
  });
  it("handles multiple spaces", function() {
  cString = new CtciStrings();
  expect(cString.spacify('abc   def')).toBe('abc%20%20%20def');
  });
});
