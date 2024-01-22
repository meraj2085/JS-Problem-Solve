/*
Task: Find and Modify
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Diana", age: 28 },
];

const findAndModify = (peopleArray, targetName, newAge) => {
  const updatedPeople = peopleArray.map((person) => {
    if (person.name === targetName) {
      return { ...person, age: newAge };
    }
    return person;
  });

  return updatedPeople;
};

// Example usage: Update age of "Bob" to 35
const updatedPeopleArray = findAndModify(people, "Bob", 35);

console.log("Updated People Array:", updatedPeopleArray);
