//1. Result of expressions

// "" + 1 + 0 = 10
//"" - 1 + 0 = 10
// true + false = 1 (true)
//6 / "3" = 2 
// "2" * "3" = 6
//4 + 5 + "px" = 9px
//"$" + 4 + 5 =$45
//"4" - 2 = 2
//"4px" -2 = NaN
// " -9 " + 5 = -9 5
// " -9 " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// undefined == null = true
// undefined === null = false
// " \t \n" - 2 = -2

// // 2.
// let three = 3
// let four = 4
// let thirty = 30
// //what is the value of the following expressions?
// let addition = three + four  //= 34  Implicit conversion
// let multiplication = three * four //=12 implicit conversion
// let division = three / four // =0.75
// let subtraction = three - four // -1
// let lessThan1 = three < four // true
// let lessThan2 = thirty < four // true

// The answers are wrong because the variables are strings. 
// Implicit conversion is done when you perform arithmetic opreation on the variables.


  // //3 . 
  // if (0) console.log('#1 zero is true')  // Will log because 0 is a truthy value
  // // First on did not log --- 0 must be a falsy value
  // if ("0") console.log('#2 zero is true') // Will log because "0" is a truthy value
  // if (null) console.log('null is true') // Will log because null is a falsy value
  // if (-1) console.log('negative is true') //Will log because -1 is a truthy value
  // if (1) console.log('positive is true') //Will log because 1 is a truthy value
    
//   //4. ternary operator
// //   let a = 8, b = 3;
// // let result = `${a} + ${b} is `;
// // if (a + b < 10) {
// // result += 'less than 10'; 
// // } else {
// // result += 'greater than 10'
// // }
// // console.log(result)

//// Answer
// let a = 8, b = 3;
// let result = `${a} + ${b} is `;
// (a+b < 10) ? result += 'less than 10': result += 'greater than 10' 
// console.log(result)
//// += is concatinating the two values and assigning the results to result variable.

 

//   //5. 
  // function getGreeting(name) {
  //   return 'Hello ' + name + '!';
  //   }
  //   console.log(getGreeting("Teddy"))
 
//  // Arrow Function
//  const getGreeting = (name) => {
//   return 'Hello ' + name + '!';
// }
//  console.log(getGreeting("Teddy"));

//  // Function Expression
//  const getGreeting1 = function(name){
//   return 'Hello ' + name + '!';
//  }
//  console.log(getGreeting1("Paul"))
 
// //6 
// const westley = {
//   name: 'Westley',
//   numFingers: 5
// }
// const rugen = {
//   name: 'Count Rugen',
//   numFingers: 6
// }
// const inigo = {
//   firstName: 'Inigo',
//   lastName: 'Montoya',
//   greeting(person) {
//   let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//   console.log(greeting + this.getCatchPhrase(person));
//   },
//   getCatchPhrase: (person) =>  (person.numFingers == 6) ? 'You have Fancy Fingers' : 'Nice to meet you.'
//     // if (person.numFingers == 6){
//     //   return 'You have Fancy Fingers'
//     // } else{
//     //   return 'Nice to meet you.';
//     // }
//   }
//   inigo.greeting(westley)
//   inigo.greeting(rugen)
// // 7.

// const basketballGame = {
//   score: 0,
//   foul: 0,
//   foulCount(){
//     this.foul++;
//     return this;
//   },
//   freeThrow() {
//    this.score++;
//    return this;
//   },
//   basket() {
//   this.score += 2;
//   return this;
//   },
//   threePointer() {
//   this.score += 3;
//   return this;
//   },
//   halfTime() {
//   console.log('Halftime score is '+this.score);
//   console.log('Your total fouls are ' +this.foul);
//   return this;
//   },
//   fullTime() {
//    console.log('The game is over') 
//   console.log('Fulltime score is '+this.score);
//   console.log('Your total fouls are ' +this.foul);
//   this.resetScoreAndFoul();
//   return this;
//   },
//   resetScoreAndFoul(){
//     this.score =0;
//     this.foul = 0;
//     return this;
//   }

// }
  
//   //modify each of the above object methods to enable function chaining as below:
//   basketballGame.basket().freeThrow().foulCount().freeThrow().basket().threePointer().halfTime().threePointer().freeThrow().foulCount().fullTime();
 //************************************************************** */
 // 8.
//  // a) Write a function that takes an object as an argument and uses a for…in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.

// const sydney = {
//   name: 'Sydney',
//   population: 5_121_000,
//   state: 'NSW',
//   founded: '26 January 1788',
//   timezone: 'Australia/Sydney'
//   }

// //b) Create a new object for a different city with different properties and call your function
// //again with the new object.

// const melbourne = {
//   name: 'Melbourne',
//   population: 5_121_220,
//   state: 'VIC',
//   founded: '26 January 1778',
//   timezone: 'Australia/Melbourne'
//   }

// const printObject = (obj) => {
//   for (const property in obj){
//     console.log(`${property}: ${obj[property]}`)

//   }
// }
// printObject(sydney)
// printObject(melbourne)

//****************************************************************** */

//9.

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//a) Create a new moreSports variable equal to teamSports and add some new sport
//values to it (using push and unshift)

        // let moreSports = teamSports;
        // moreSports.push('Rugby')
        // moreSports.push('Tennis')


// b) Create a new dog2 variable equal to dog1 and give it a new value

        // let dog2 = dog1
        // dog1 = 'Scooby'


//c) Create a new cat2 variable equal to cat1 and change its name property

      // let cat2 = cat1;
      // cat1.name = 'Cheeky'

//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
//changed? Why?
          // console.log(teamSports)
          // console.log(dog1)
          // console.log(cat1)
//e) Change the way the moreSports and cat2 variables are created to ensure the
//originals remain independent

          // let moreSports = []
          // moreSports.push('Rugby', 'Tennis')

          // cat2 = {}
          // cat2.name = 'Cheeky'

//***************************************************************** */
//10.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
 }
//  a) Create a new person using the constructor function and store it in a variable
 const PersonOne = new Person('Teddy', 20)

// b) Create a second person using different name and age values and store it in a separate
//variable
const PersonTwo = new Person('Jason', 25)

// c) Print out the properties of each person object to the console

console.log(PersonOne)
console.log(PersonTwo)
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.

class PersonClass{
  constructor(name, age, ){
    this.name = name;
    this.age = age;
  }
  canDrive(){
    if (this.age >= 18){
      return true;
    }else{
      return 'Too young to drive'
    }
  }
}
const PersonThree = new PersonClass('Alberto', 17)
console.log(PersonThree)
console.log(PersonThree.canDrive());
// e)  Add a canDrive method to both the constructor function and the class that returns true
//if the person is old enough to drive.


