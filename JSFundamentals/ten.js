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


