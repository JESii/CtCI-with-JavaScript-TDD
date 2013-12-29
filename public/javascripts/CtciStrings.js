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
