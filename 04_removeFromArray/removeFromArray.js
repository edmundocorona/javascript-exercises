const removeFromArray = function(array, ...itemsToDelate) {
  return array.filter((item) => !itemsToDelate.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
