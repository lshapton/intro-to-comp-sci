# Week 4: Functional Programming in Javascript - Solutions

[Functional Javascript](https://nodeschool.io/)

## Higher Order Functions

```
function repeat(operation, num) {
    if(num <=0) return
    operation()
    num = num - 1
    return repeat(operation, num)
  }

module.exports = repeat
```

## Map

```
module.exports = function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2
  })
}
```


## Filter

```
module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}
```

## Every-some

```
module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}
```

## Reduce

```
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords
```
