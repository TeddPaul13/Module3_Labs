/** 1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.*/

function makeCounter() {
let currentCount = 0;
return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}
//let counter1 = makeCounter();
//counter1(); // 1
//counter1(); // 2
/**a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1*/
let counter2 = makeCounter();

/**b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)*/
function makeCounter(startFrom) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
//let counter1 = makeCounter(9);
//counter1();
/*c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
   // let counter1 = makeCounter(9, 2);
    //counter1();
    //counter1();

/**2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed */
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms')
delayMsg('#4: Not Delayed at all')

//a) What order will the four tests below print in? Why?
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all.