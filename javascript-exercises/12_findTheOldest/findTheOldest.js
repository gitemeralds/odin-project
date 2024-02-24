const findTheOldest = function (objectsArray) {
  let arrayOfPeopleAges = objectsArray.map((object) => ({
    name: object.name,
    age: object.yearOfDeath
      ? object.yearOfDeath - object.yearOfBirth
      : new Date().getFullYear() - object.yearOfBirth,
  }));
  let oldestPerson = arrayOfPeopleAges.reduce((oldestPerson, currentPerson) => {
    return currentPerson.age > oldestPerson.age ? currentPerson : oldestPerson;
  }, arrayOfPeopleAges[0]);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
