var anaNg = function(strA, strB) {
  strA = strA.toUpperCase();
  strB = strB.toUpperCase();
  if (strA.length !== strB.length || strA === strB) {
    return false;
  }
  var splitA = strA.toUpperCase().split('');
  var splitB = strB.toUpperCase().split('');
  var i = 0;
  for (i in splitA) {
    if (splitB.indexOf(splitA[i]) === -1) {
      return false;
    }
    splitB[splitB.indexOf(splitA[i])] = null;
  }
  return true;
};


var anagram = function(word) {
  return {matches: function(input) {
    if (typeof input === "string") {
      var matchList = arguments;
    } else {
      var matchList = input;
    }
    var results = [];
    for(var match in matchList) {
      if (anaNg(word, matchList[match])) {
        results.push(matchList[match]);
      }
    }
    return results;
  }};
};

module.exports = anagram;
