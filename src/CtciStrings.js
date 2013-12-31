// Object definitions for CtCI - Chapter 1

function CtciStrings() {
}

CtciStrings.prototype.uniqueString = function(string) {
  var len = string.length;
  for(var i = 0; i < len; i++) {
    for(var j = i + 1; j < len; j++) {
      if(string.charAt(j) === string.charAt(i)) {
        return false;
      }
    }
  }
  return true;
};

CtciStrings.prototype.is_permutation = function(string1, string2) {

  if(string1.length == 0 || string2.length == 0) {
    return true;
  }
  if(string1.valueOf() == string2.valueOf()) {
    return true;
  }

  // Find the longest string to use as the 'base'
  if(string2.length > string1.length) {
    var tmp = '';
    tmp = string2.slice(0);
    string2 = string1.slice(0);
    string1 = tmp.slice(0);
  }

  // Process the real deal, now that edge cases are gone
  var result_set = this.permutations(string1);
  var len = result_set.length;
  for(var i = 0; i < len; i++) {
    if(result_set.pop().toString() == string2.toString()) {
      return true;
    }
  }
  return false;
};

CtciStrings.prototype.permutations = function(string) {
  if(string.length === 0) {
    return [''];
  }
  
  // Algorithm:
  // For each letter in the string (could be charAt())
  // 1. copy what's already in the result arry
  // 2. add the current letter to each element in the result array
  var result_set = [''];
  for(var i = 0; i < string.length; i++) {
    work_set = result_set.slice(0);
    ws_length = work_set.length;
    for(var j = 0; j < ws_length; j++) {
      result_set.push(work_set[j].valueOf() + string[i]);
    }
  }
  return result_set;
};
