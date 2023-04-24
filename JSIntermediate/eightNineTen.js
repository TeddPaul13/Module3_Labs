
//8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map()
phoneBookDEF.set('Danny', '0473456433'),
phoneBookDEF.set('Elly', '0473006433'),
phoneBookDEF.set('Fally', '0473422233')


//console.log(phoneBookDEF)
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEFArray = new Map([['Danny', '0473456433'],
['Elly', '0473006433'],
['Fally', '0473422233']])



// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0423999888')


// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

function printPhoneBook(contacts){
    contacts.forEach((value, key) =>{
        console.log(key + ':' + value)
    })
}
//printPhoneBook(phoneBookABC)

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);



// f) Print out the full list of names in the combined phone book
console.log(phoneBook)

// Given the below salaries object, perform the following tasks.
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
   // a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
    
  function sumSalaries(object){ 
    return Object.values(object).reduce((accumulator, value) => {
    return accumulator + value;
   }, 0)
}
//console.log(sumSalaries(salaries))
   
   //b) Write a function topEarner(salaries) that calculates and returns the name of the person
   // earning the highest salary
    
function topEarner(object){
    return Object.keys(object).reduce((a, b) => object[a] > object[b] ? a : b)
}
//console.log(topEarner(salaries))


//******************************************************************************************** */

//10.The following code uses the Date object to print the current time and the number of hours
//that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
//console.log(today.getHours() + ' hours have passed so far today')
//a) Print the total number of minutes that have passed so far today
//console.log(today.getHours()*60 + today.getMinutes() + ' minutes have passed so far today')

//b) Print the total number of seconds that have passed so far today
//console.log(today.getHours()*360 + today.getMinutes()*60 + today.getSeconds() + ' seconds have passed so far today')

//c) Calculate and print your age as: 'I am x years, y months and z days old'
const dob = new Date(1992,5,22, 8, 0, 0)

const yearsOfBirth = today.getFullYear() - dob.getFullYear();

const months = today.getMonth() - dob.getMonth();

let mydays = today.getDate() - dob.getDate();

console.log(mydays)

//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
//of days in between the two given dates.

 