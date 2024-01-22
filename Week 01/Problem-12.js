/*
Task 12: Leap Year Checker
Write a function that determines whether a given year is a leap year.
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
    let year = parseInt(await messagePrompt("Enter a year: "));

    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          console.log("Leap Year");
        } else {
          console.log("Not a Leap Year");
        }
      } else {
        console.log("Leap Year");
      }
    } else {
      console.log("Not a Leap Year");
    }
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
