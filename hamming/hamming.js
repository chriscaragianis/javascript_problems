var compute = function(strA, strB) {
  if (strA.length !== strB.length) {
    throw("DNA strands must be of equal length.");
  }  
  var count = 0;
  var i = 0;
  for (i = 0; i < strA.length; i++) {
    if (strA.charAt(i) !== strB.charAt(i)) {
      count += 1;
    }
  }
  return count;  
}

module.exports.compute = compute;
