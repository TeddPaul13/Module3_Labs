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