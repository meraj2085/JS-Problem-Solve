/*
Task 11: Array Reduction
Create an array of numbers. Write a function that uses the reduce 
method to calculate the sum of all even numbers in the array.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = () => new Promise((resolve) => rl.question("", resolve));

const messagePrompt = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

(async () => {
  try {
    const n = parseInt(await messagePrompt("Enter the size of the array: "));
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(parseInt(await prompt()));
    }

    const sum = arr.reduce((acc, curr) => {
      if (curr % 2 === 0) {
        return acc + curr;
      }
      return acc;
    }, 0);

    console.log(`The sum of even numbers is ${sum}`);
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
