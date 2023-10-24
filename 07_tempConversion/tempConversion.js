const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const DECIMALS = 1;
  return ceil10(celsius, DECIMALS);
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32;
  const DECIMALS = 1;
  return ceil10(fahrenheit, DECIMALS);
};

const ceil10 = function(num, decimals = 0){
  return Math.ceil(num * 10 ** decimals) / 10 ** decimals;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
