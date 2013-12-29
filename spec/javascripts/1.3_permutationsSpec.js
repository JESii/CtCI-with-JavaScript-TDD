alert('Entering 1.3_permutationsSpec.js');

// CtCI 1.3
//   "Given two strings, decide if one is a permutation of the other."
//   Cracking the Coding Interview, p 73
// 
// Use the general match definition of
//   Elements of A taken n at a time
// So if A = {a,b,c}, then the permuations of A are:
//   {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}; 
//   empty set = don't care, so make it a permuation
//
// Therefore, if B is longer than A, it cannot be a permutation
// Also, if B is empty, then it is the null set and thus make it a permutation

describe("Test for string permutation", function() {
  var ctciStrings = new CtciStrings();

  it("returns true for two empty strings", function() {
    expect(ctciStrings.is_permutation('', '')).toBe(true);
  });

  it("returns true when there's one empty string", function() {
    expect(ctciStrings.is_permutation('', 'abcde')).toBe(true);
    expect(ctciStrings.is_permutation('abcde','')).toBe(true);
  });

  it("returns false when the strings are not matched", function() {
    expect(ctciStrings.is_permutation('abc','def')).toBe(false);
  });

  it("returns false when the 2nd string longer than the 1st string", function() {
    expect(ctciStrings.is_permutation('a','abc')).toBe(false);
  });

  it("returns true when the strings are simple permutations", function() {
    expect(ctciStrings.is_permutation('a','a')).toBe(true);
  });
});
