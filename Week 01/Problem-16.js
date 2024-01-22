/**
Task 16: Advanced Sorting
Create an array of objects representing students with 'name' and 
'grades' properties. Write a function to sort the students by 
average grade in descending order.
 */

const students = [
  { name: "Alice", grade: 12 },
  { name: "Bob", grade: 10 },
  { name: "Charlie", grade: 9 },
  { name: "Denise", grade: 11 },
  { name: "Eve", grade: 12 },
];

students.sort((a, b) => b.grade - a.grade);

console.log(students);
