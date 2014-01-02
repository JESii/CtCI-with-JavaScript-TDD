//CtCI 1.4
//  "Replace all spaces in a string with '%20'"
//  Cracking the Coding Interview, p73

describe("Spacify a string", function() {
  it("it handles the null string", function() {
    cString = new CtciStrings();
    expect(cString.spacify('')).toBe('');
  });
});
