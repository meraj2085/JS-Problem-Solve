/*
Task 09: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
];

const sortByYearAscending = (carArray) => {
  return carArray.sort((a, b) => a.year - b.year);
};

const sortedCars = sortByYearAscending(cars);

console.log("Sorted Cars:", sortedCars);
