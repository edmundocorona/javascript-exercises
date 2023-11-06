const findTheOldest = function(array) {
  return array.reduce((oldest, current) => {
    return calcAge(oldest) < calcAge(current) ? current : oldest;
  });
};

const calcAge = function (person) {
  let lastYear = person.yearOfDeath;
  if (!lastYear) {
    lastYear = new Date().getFullYear();
  }
  return lastYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
