/*
Task 14: Unique Values
Create an array of numbers with some duplicate values. 
Write a function to filter out the duplicate values and 
return a new array with only unique numbers. Print the result.
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

    const unique = arr.filter((item, index) => arr.indexOf(item) === index);

    console.log(unique);
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
