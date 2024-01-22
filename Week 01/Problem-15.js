/*
Task 15: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.
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

    const max = arr.reduce((acc, curr) => {
      if (curr > acc) {
        return curr;
      }
      return acc;
    });

    console.log(`The maximum value is ${max}`);
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
