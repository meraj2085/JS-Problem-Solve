/*
Task 13: Count Vowels:
Write a function that counts the number of vowels in a given string.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messagePrompt = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

(async () => {
  try {
    let string = await messagePrompt("Enter a string: ");

    const vowels = ["a", "e", "i", "o", "u"];

    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }

    console.log(count);
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
