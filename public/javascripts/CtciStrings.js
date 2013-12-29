alert("calling ctciStrings.js");

function CtciStrings() {
}

CtciStrings.prototype.uniqueString = function(s) {
  var string = new String(s);
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

CtciStrings.prototype.is_permutation = function(s1, s2) {
  var string1 = new String(s1);
  var string2 = new String(s2);

  if(string1.length == 0 || string2.length == 0) {
    return true;
  }
  if(string2.length > string1.length) {
    return false;
  }
  // Process the real deal, now that edge cases are gone
  return false;
};
