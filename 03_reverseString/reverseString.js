const reverseString = function(string) {
  const stringArray = string.split('');
  const stringArrayReversed = stringArray.reverse();
  const stringReversed = stringArrayReversed.join('');
  return stringReversed; 
};

// Do not edit below this line
module.exports = reverseString;
