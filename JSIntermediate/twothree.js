/**2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (…) added to the end if it was too long, or the original text otherwise.
 */

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
//console.log(animals)

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
 //replaceMiddleAnimal('fox')
 

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//containing all the animals that begin with the beginsWith string. Try to make it work
//regardless of upper/lower case.

function findMatchingAnimals(beginsWith){
    for (let i=0; i<animals.length; i++){
        beginsWith = animals[i].charAt(0)
        return animals
    }

    

}
console.log(findMatchingAnimals('M'))
//************************************************************************** */