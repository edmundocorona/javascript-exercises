const palindromes = function (string) {
  const alphanumerical = string.toLowerCase().replace(/\W/g, "")
  return alphanumerical == alphanumerical.split('').reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
