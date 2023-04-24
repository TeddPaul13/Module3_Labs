/**4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do? */
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

////Answer

// += is concatinating the two values and assigning the results to result variable.

 /* 5 . Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.*/
  function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
    console.log(getGreeting("Teddy"))
 
 // Arrow Function
 const getGreeting = (name) => {
  return 'Hello ' + name + '!';
}
 console.log(getGreeting("Teddy"));

 // Function Expression
 const getGreeting1 = function(name){
  return 'Hello ' + name + '!';
 }
 console.log(getGreeting1("Paul"))
 
/**6. a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator */
const westley = {
  name: 'Westley',
  numFingers: 5
}
const rugen = {
  name: 'Count Rugen',
  numFingers: 6
}
const inigo = {
  firstName: 'Inigo',
  lastName: 'Montoya',
  greeting(person) {
  let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
  console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>  (person.numFingers == 6) ? 'You have Fancy Fingers' : 'Nice to meet you.'
    // if (person.numFingers == 6){
    //   return 'You have Fancy Fingers'
    // } else{
    //   return 'Nice to meet you.';
    // }
  }
  inigo.greeting(westley)
  inigo.greeting(rugen)