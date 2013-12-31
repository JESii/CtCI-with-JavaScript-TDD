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
// "Decide if one is a permutation of the other" really implies that the
// comparison can go either way. Thus, the longer string becomes the one
// to compare against.
// Also, if either is empty, then it is the null set and thus a permutation

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

  it("properly handles case when 2nd string is longer than  1st string", function() {
    expect(ctciStrings.is_permutation('a','abc')).toBe(true);
  });

  it("handles a simple permutations", function() {
    expect(ctciStrings.is_permutation('a','a')).toBe(true);
  });

  it("handles another matching case", function() {
    expect(ctciStrings.is_permutation('ab','abcd')).toBe(true);
  });

  it("handles anaother non-matching case", function() {
    expect(ctciStrings.is_permutation('ae','abcd')).toBe(false);
  });

  describe("Generate permutations", function() {
    var ctciStrings = new CtciStrings();

    it("Generates the null permutation", function() {
      expect(ctciStrings.permutations('')).toEqual(['']);
    });

    it("Generates the simplest permutation set", function() {
      // Same problem as in Ruby: it's the same object!!!
      expect(ctciStrings.permutations('a')).toEqual(['','a']);
    });

    it("Generates a 2-element permutation", function() {
      expect(ctciStrings.permutations('ab').sort()).toEqual(['','a','b','ab'].sort());
    });
  });
});
