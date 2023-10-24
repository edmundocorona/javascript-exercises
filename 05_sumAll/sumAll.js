const sumAll = function(floorInteger, cellInteger) {
  if (typeof floorInteger != 'number') return 'ERROR';
  if (typeof cellInteger != 'number') return 'ERROR';
  if (floorInteger < 0 || cellInteger < 0) return 'ERROR';
  let sum = 0;
  let i = floorInteger;
  if (cellInteger < floorInteger) {
    i = cellInteger;
    cellInteger = floorInteger;
  }
  for (i; i <= cellInteger; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
