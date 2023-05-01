// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?
let car = {
make: "Porsche",
model: '911',
year: 1964,
description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
setTimeout(car.description, 200); //fails
// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function
setTimeout(function() {
    car.description()
}, 2000)
// b) Change the year for the car by creating a clone of the original and overriding it
car = {...car, year:2023}


// c) Does the delayed description() call use the original values or the new values from
// b)? Why?

/** New values because the year is changed before the setTimeout is executed */
// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function

let desiredCar = car.description.bind(car);
setTimeout(desiredCar, 200)
// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)