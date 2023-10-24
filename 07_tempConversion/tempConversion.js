const convertToCelsius = function(fahrenheit) {
  return Math.ceil(((fahrenheit - 32) * 5 / 9), -1);
};

const convertToFahrenheit = function(celsius) {
  return Math.ceil((celsius * 9 / 5 + 32), -1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
