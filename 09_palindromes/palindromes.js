const palindromes = function (string) {
  const arrayString = string.toLowerCase().split('');
  const alphanumerical = arrayString.filter(char => char.match(/\w/));
  for (let i = 0; i < Math.floor(alphanumerical.length / 2); i++) {
    if (alphanumerical[i] !== alphanumerical[alphanumerical.length - i - 1]) {
      return false;
    }
  }
  return true;
  
};

// Do not edit below this line
module.exports = palindromes;
