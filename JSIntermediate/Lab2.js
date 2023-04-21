//1.
//Create a function that takes a string as a parameter and returns the string with the first
//character of each word changed into a capital letter, as in the example below. Test it with
//different strings.

const ucFirstLetter = (thestring) => {
    // split the above string into an array of strings whenever a blank space is encountered
    const stringArr = thestring.split(" ");

    //loop through each element of the array and capitalize the first letter.

    // + .slice(1) adds the rest of the string after the first letter has been capitalized
    
    for (let i=0; i<stringArr.length; i++){
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    }

    //Join all the elements of the array back into a string using a blankspace as a separator 

    const string2 = stringArr.join(" ")

    return string2;
    

};
//console.log(ucFirstLetter("this is javascript"))

/////***************************************************************************************************** */

//2.
//Create a function truncate(str, max) that truncates a given string of text if its total
//length is greater than the max length. It should return either the truncated text, with an
//ellipsis (…) added to the end if it was too long, or the original text otherwise.
//

function truncate(str, max){
    if (str.length > max){
        //return str.slice(0, max) + "...";  // Works the same
        return str.substring(0, max) + "...";
    } else{
        return str;
    }
}
//console.log(truncate('This is going to be a long day', 20))

// b) Write another variant of the truncate function that uses a conditional operator.

const truncateString = (strng, maxx) => (strng.length > maxx) ? strng.substring(0, maxx) + "..." : strng
//console.log(truncateString('This is going to be a long day', 10))

////*********************************************************************************************************** */

//3.
let animals = ['Tiger', 'Giraffe']
//console.log(animals)

// a) Add 2 new values to the end

animals.push('Monkey', 'Lion')
console.log(animals)

//b) Add 2 new values to the beginning

animals.unshift('Cheetah', 'Cougar')
//console.log(animals)

//c) Sort the values alphabetically

const sortedAnimals = animals.sort((a,b) => a-b);
//console.log(sortedAnimals)

//d)3Write a function replaceMiddleAnimal(newValue) that replaces the value in the
//middle of the animals array with newValue

 function replaceMiddleAnimal(newAnimal){
    let midIndex = animals.length/2;
     animals[midIndex] = newAnimal;

 }
 replaceMiddleAnimal('fox')
 

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//containing all the animals that begin with the beginsWith string. Try to make it work
//regardless of upper/lower case.

function findMatchingAnimals(beginsWith){

}

//************************************************************************** */

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
//'margin-left' into camel-cased 'marginLeft'

function camelCase(cssProp){
    const cssPropArr = cssProp.split("-")

    if (cssPropArr.length >= 2){
        cssPropArr[1] = cssPropArr[1].charAt(0).toUpperCase() + cssPropArr[1].slice(1);
    const finalWord = cssPropArr.join("")
    return finalWord
}else{
    return cssProp;
}

}
//console.log(camelCase("background-image"))

//*************************************************************** */

// 5. 
//Decimal number operations in JavaScript can lead to unexpected results, as in the
//following:
let twentyCents = 0.20
let tenCents = 0.10
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
//We can sometimes avoid this using the toFixed function to force the number of decimal
//places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
let result1 = fixedTwenty + fixedTen;
 //why is this not working?
//a) Explain why the above code returns the wrong answer

// toFixed() methods returns a string.

//b) Create a function currencyAddition(float1, float2) which safely adds the two
//decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2){
    const results = float1 + float2;
    const exactResults = Math.round(results*100)/100;
    return exactResults;
}
//console.log(currencyAddition(0.2, 0.1))


//c) Create a function currencyOperation(float1, float2, operation) which
//safely performs the given operation (either +, -, / or *) on the two numbers and returns
//the correct float result. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/switch may be useful.
function currencyOperation(float1, float2, operation){
    //const operatorType = operation
    switch (operation){
        case "+":
            return Math.round((float1 + float2)*100)/100
            
        case "-":
            return Math.round((float1 - float2)*100)/100
            
        case "/":
            return Math.round((float1 / float2)*100)/100
            
        case "*":
            return Math.round((float1 * float2)*100)/100
            
        default:
            console.log('Operation not valid')
}
}
//console.log(currencyOperation(0.2, 0.1, "/"))

//d) (Extension) Extend the above function to include a fourth argument numDecimals
///which allows the operation to support different amounts of decimal places from 1 to 10

function currencyOperation1(float1, float2, operation, numDecimals){
    //const operatorType = operation
    switch (operation){
        case "+":
            return Math.round((float1 + float2)*numDecimals)/numDecimals
        case "-":
            return Math.round((float1 - float2)*numDecimals)/numDecimals
        case "/":
            return Math.round((float1 / float2)*numDecimals)/numDecimals
        case "*":
            return Math.round((float1 * float2)*numDecimals)/numDecimals
        default:
            console.log('Operation not valid')
}
}
//console.log(currencyOperation1(0.245, 0.155, "-", 10000))

//********************************************************************* */

//6.
//Create a function unique(duplicatesArray) which takes an array parameter that may
//include duplicates. Your function should return an array containing only the unique values
//from duplicatesArray.
//Test with the following arrays and create another one of your own.
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// compare the index of all items with the first item, if indexes of a similar item in the array don't match, filter.
const unique = duplicatesArray => duplicatesArray.filter((item, index) => duplicatesArray.indexOf(item) !== index);

//console.log(unique(testScores))
//function unique(duplicatesArray){
   // duplicatesArray.filter((item, index) => duplicatesArray.indexOf(item) !== index)
    
//}

//****************************************************************************** */

//7.
//Use the following array of book objects to practice the array functions for map, find and
//filter. Test each of your answers to the below tasks.
const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
//a) Write a function getBookTitle(bookId) that uses the find function to return the
//title of the book object with the matching id.
const getBookTitle = (bookID) =>  {
    let foundBook = books.find(({id})=> id===bookID);
    return foundBook.title;
    }
//console.log(getBookTitle(4));

//b) Write a function getOldBooks() that uses the filter function to return all book
//objects written before 1950.
const getOldBooks = () =>  {
    let foundBook = books.filter(({year})=> year<1950); //{} in method used to extract object properties
    return foundBook;
    }
//console.log(getOldBooks());

//c) Write a function addGenre() that uses the map function to add a new genre property
//to all of the above books, with the value ‘classic’.
 function addGenre(){
    const bookGenre = books.map(bookObject => bookObject.genre = 'classic')
    return bookGenre;
 }
 addGenre()
//console.log(books)


//d) (Extension) Write a function getTitles(authorInitial) that uses map and
//filter together to return an array of book titles for books written by authors whose
//names start with authorInitial.
function getTitles(authorInitial){
    const bookTitlebyAuthor = (books.filter(({author}) =>  author.charAt(0).toLowerCase()==authorInitial.toLowerCase()).map((bookObject) => bookObject.title));

    return bookTitlebyAuthor
}
//console.log(getTitles('f'))

//e) (Extension) Write a function latestBook() that uses find and forEach to get the
//book with the most recent publication date.
 function latestBook(){
    let maxYear = 1900
    books.forEach(element => {
        if (element.year>maxYear){
            maxYear = element.year
        }
    });
    return books.find(({year}) => year===maxYear)
 }
//console.log(latestBook())

/********************************************************************* */

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
printPhoneBook(phoneBookABC)

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);



// f) Print out the full list of names in the combined phone book
console.log(phoneBook)

function foo() {
    console.log('First');
    }
    
    function bar() {
    console.log('Second');
    setTimeout(foo, 0);
    }
    
    bar();
    console.log('Third');