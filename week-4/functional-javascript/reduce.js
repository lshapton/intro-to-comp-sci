function countWords(inputWords) {
  return inputWords.reduce(function(countMap, word){
    countMap[word] = countMap[word] + 1 || 1
    return countMap
  }, {})
}

module.exports = countWords
