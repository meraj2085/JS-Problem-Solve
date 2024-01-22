/*
Task 17:Functional Programming - Reduce
Write a function that uses the reduce function to calculate 
the total value of an array of objects with a 'quantity' 
and 'price' property
*/

const arr = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const total = arr.reduce((acc, curr) => {
  return acc + curr.quantity * curr.price;
}, 0);

console.log(total);
