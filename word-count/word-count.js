var words = function(input) {
  var output = {};
  var wordArray = input.trim().split(/[\s\t\n]+/);
  for (var w in wordArray) {
    if (Object.keys(output).indexOf(wordArray[w]) === -1){
      output[wordArray[w]] = 1;
    } else {
    output[wordArray[w]] += 1;
    }
  }
  return output;
};

module.exports = words; 
