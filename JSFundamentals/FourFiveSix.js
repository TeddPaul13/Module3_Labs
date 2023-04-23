//4. ternary operator
  let a = 8, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10'; 
} else {
result += 'greater than 10'
}
console.log(result)

//// Answer

let result1 = `${a} + ${b} is `;
(a+b < 10) ? result1 += 'less than 10': result1 += 'greater than 10' 
console.log(result1)

// += is concatinating the two values and assigning the results to result variable.

 

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