/**7. In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something
like [object Object].
However, we can define our own toString methods for custom objects to provide a more
meaningful string representation.*/
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]
//a) Define a custom toString method for the Person object that will format and print
//their details

Person.prototype.toString = function () {
  return `My name is ${this.name}, I am a ${this.age} old ${this.gender}`;
};

//b) Test your method by creating 2 different people using the below constructor function
//and printing them
const object1 = new Person("Teddy", 25, "Male");
const object3 = new Person("Paul", 25, "Male");
console.log("Person2: " + object1);
console.log("Person3: " + object3);

//c) Create a new constructor function Student that uses call to inherit from Person and
//add an extra property cohort

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

//d) Add a custom toString for Student objects that formats and prints their details. Test
//with 2 students.

Student.prototype.toString = function () {
  return `My name is ${this.name}, I am a ${this.age} old ${this.gender} taking ${this.cohort}`;
};

const student1 = new Student("Liz", 25, "Female", "Engineering");
const student2 = new Student("Ian", 25, "Male", "Data Science");
console.log("First Student: " + student1);
console.log("Second Student: " + student2);

/**DONE */
