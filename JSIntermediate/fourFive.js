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
// the number of 0's in the numDecimals argument represent the number of decimal places.
//console.log(currencyOperation1(0.245, 0.155, "-", 10000)) 

//********************************************************************* */
