//3 
//Using the following code to test and start with:

function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 
    //1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);

// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.

function debounce(func, timeout = 1000){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {func.apply(this, args);}, timeout);
    };
}
const delayPrinting = debounce(() => printMe());

delayPrinting();
delayPrinting();
delayPrinting();



// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms

// function debounce(func, timeout = 1000){
//     let timer;
//     return (...args) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {func.apply(this, args);}, timeout);
//     };
// }
// const delayPrinting1 = debounce(() => printMe());

// delayPrinting1();


// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statemen 

/** NOT DONE --- TEST */