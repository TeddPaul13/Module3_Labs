// 9. We can delay execution of a function using setTimeout, where we need to provide the
// callback function to be executed after the delay.

// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

function randomDelay() {
  let delay = Math.ceil(Math.random() * 20);
  console.log(`${delay} seconds`);
  return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}
randomDelay().then(() => console.log("There appears to have been a delay."));
// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it

function randomDelayB() {
  let delay = Math.ceil(Math.random() * 20);
  console.log(`${delay} seconds`);
  return new Promise((resolve) => {
    setTimeout(delay % 2 == 0 ? resolve : reject, delay * 1000);
  });
}
randomDelayB()
  .then(() => console.log("There appears to have been a delay."))
  .catch(() => console.log("Odd delay seconds")); /**ANSWER FOR C */
// c) Update the testing code to catch rejected promises and print a different message

// d) Try to update the then and catch messages to include the random delay value

function randomDelayC() {
  let delay = Math.ceil(Math.random() * 20);
  console.log(`${delay} seconds`);
  return new Promise((resolve) => {
    setTimeout(delay % 2 == 0 ? resolve : reject, delay * 1000, delay);
  });
}
randomDelayC()
  .then((delay) => console.log(`Successful even delay ${delay} seconds.`))
  .catch((delay) => console.log(`Failed odd delay ${delay} seconds`));

/**DONE */
