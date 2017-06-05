function repeat(operation, num) {
  if(num<=0) return;
  operation();
  num = num - 1;
  return repeat(operation, num);
  // SOLUTION GOES HERE
}

// Do not remove the line below
module.exports = repeat
