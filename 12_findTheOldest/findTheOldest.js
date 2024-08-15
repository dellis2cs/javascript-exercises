const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (arr) {
  let ages = arr.map((person) =>
    getAge(person.yearOfBirth, person.yearOfDeath)
  );
  for (let i = 0; i < ages.length; i++) {
    arr[i]["age"] = ages[i];
  }
  ages = ages.sort((a, b) => a - b).reverse();

  return arr.find((elem) => elem.age === ages[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
