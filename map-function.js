var words = ["ground", "control", "to", "major", "tom"];

function map(inputArray, callback) {
  var outputArray = [];
  for (i in inputArray) {
    outputArray.push(callback(inputArray[i]));
  }
  return outputArray;
}

var wordsLength = map(words, function(word) {
  return word.length;
});

var wordsCapital = map(words, function(word) {
  return word.toUpperCase();
});

var wordsReverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(wordsLength, wordsCapital, wordsReverse);
