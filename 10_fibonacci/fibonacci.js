const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS";
  }
  let last = 0;
  let result = 1;
  while (n > 1) {
    const temp = result;
    result += last;
    last = temp;
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
