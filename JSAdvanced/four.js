/**4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.*/

//a) Write a function printFibonacci() using setInterval that outputs a number in
//the Fibonacci sequence every second.

const printFibonacci = () => {
  let first = 0;
  let second = 1;

  setInterval(function printFibonacciNumber() {
    let result;
    result = first + second;
    first = second;
    second = result;
    console.log(first);
  }, 1000);
};
//printFibonacci()

//b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
//calls to do the same thing
const printFibonacci2 = () => {
  let first = 0;
  let second = 1;

  setTimeout(function printFibonacciTimeouts() {
    let result;
    result = first + second;
    first = second;
    second = result;
    console.log(first);
    setTimeout(printFibonacciTimeouts, 1000);
  }, 1000);
};
//printFibonacci2()

//c) Extend one of the above functions to accept a limit argument, which tells it how many
//numbers to print before stopping.
const printFibonacci3 = (limitNumber) => {
  let first = 0;
  let second = 1;
  let counter = 0;

  const printFibonacciTimeouts = () => {
    let result;
    while (counter < limitNumber) {
      result = first + second;
      first = second;
      second = result;
      console.log(first);
      counter++;
    }
  };

  setTimeout(printFibonacciTimeouts, 1000);
};
printFibonacci3(3);

/**DONE */
