/*
Task 18: Array Intersection
Write a function that takes two arrays and returns a new array 
containing only the elements that appear in both arrays.
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
    const n = parseInt(
      await messagePrompt("Enter the size of the first array: ")
    );

    const arr1 = [];
    for (let i = 0; i < n; i++) {
      arr1.push(parseInt(await prompt()));
    }

    const m = parseInt(
      await messagePrompt("Enter the size of the second array: ")
    );
    const arr2 = [];
    for (let i = 0; i < m; i++) {
      arr2.push(parseInt(await prompt()));
    }

    const intersection = arr1.filter((item) => arr2.includes(item));

    console.log(`The intersection of the two arrays is ${intersection}`);
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
