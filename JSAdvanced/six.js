/**6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds. */

// function multiply(a, b) {
//     console.log( a * b );
//     }
//     multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//    a) Use the example multiply function below to test it with, as above, and assume that all
//delayed functions will take two parameters.
Function.prototype.delay = function(ms) {
    const theFunc = this;
    return function(...args) {
      setTimeout(() => {
        theFunc.apply(this, args); // Answer for part B....
      }, ms);
    };
  };
  function multiply(a, b) {
    console.log( a * b );
    }
    multiply.delay(500)(5, 5); 



// b) Use apply to improve your solution so that delayed functions can take any number of
//parameters


//c) Modify multiply to take 4 parameters and multiply all of them, and test that your
//delay prototype function still works.

function multiply(a, b, c, d) {
    console.log( a * b * c * d);
    }
    multiply.delay(500)(5, 5, 5, 5); 
