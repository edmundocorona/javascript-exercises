const add = function() {
  let addition = 0;
	for (let i = 0; i < arguments.length; i++) {
    addition += arguments[i];
  }
  return addition;
};

const subtract = function() {
  let sub = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
    sub -= arguments[i];
  }
  return sub;
};

const sum = function(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let mlt = array[0];
	for (let i = 1; i < array.length; i++) {
    mlt = mlt * array[i];
  }
  return mlt;
};

const power = function() {
  let pow = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
    pow **= arguments[i];
  }
  return pow;
};

const factorial = function() {
	let fac = 1;
  for (let i = 2; i <= arguments[0]; i++) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
