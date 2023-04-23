 // 8.
 // a) Write a function that takes an object as an argument and uses a for…in loop to access
//and print to the console each of those object properties and their values. Test it using
//the sydney object below.

const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney'
  }

//b) Create a new object for a different city with different properties and call your function
//again with the new object.

const melbourne = {
  name: 'Melbourne',
  population: 5_121_220,
  state: 'VIC',
  founded: '26 January 1778',
  timezone: 'Australia/Melbourne'
  }

const printObject = (obj) => {
  for (const property in obj){
    console.log(`${property}: ${obj[property]}`)

  }
}
printObject(sydney)
printObject(melbourne)

//****************************************************************** */

//9.

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//a) Create a new moreSports variable equal to teamSports and add some new sport
//values to it (using push and unshift)

        let moreSports = teamSports;
        moreSports.push('Rugby')
        moreSports.push('Tennis')


// b) Create a new dog2 variable equal to dog1 and give it a new value

        let dog2 = dog1
        dog1 = 'Scooby'


//c) Create a new cat2 variable equal to cat1 and change its name property

      let cat2 = cat1;
      cat1.name = 'Cheeky'

//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
//changed? Why?
          console.log(teamSports)
          console.log(dog1)
          console.log(cat1)
//e) Change the way the moreSports and cat2 variables are created to ensure the
//originals remain independent

        //   let moreSports = []
        //   moreSports.push('Rugby', 'Tennis')

        //   cat2 = {}
        //   cat2.name = 'Cheeky'

//***************************************************************** */