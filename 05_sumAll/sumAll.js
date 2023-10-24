const sumAll = function(floorInteger, cellInteger) {
  let sum = 0;
  for (floorInteger; floorInteger <= cellInteger; floorInteger++) {
    sum += floorInteger;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
