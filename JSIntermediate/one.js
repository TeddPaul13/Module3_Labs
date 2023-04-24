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
console.log(ucFirstLetter("this is javascript"))

/////***************************************************************************************************** */

