/**7. The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations. */

const basketballGame = {
  score: 0,
  foul: 0,
  foulCount() {
    this.foul++;
    return this;
  },
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    console.log("Your total fouls are " + this.foul);
    return this;
  },
  fullTime() {
    console.log("The game is over");
    console.log("Fulltime score is " + this.score);
    console.log("Your total fouls are " + this.foul);
    this.resetScoreAndFoul();
    return this;
  },
  resetScoreAndFoul() {
    this.score = 0;
    this.foul = 0;
    return this;
  },
};
  
  //modify each of the above object methods to enable function chaining as below:
  basketballGame.basket().freeThrow().foulCount().freeThrow().basket().threePointer().halfTime().threePointer().freeThrow().foulCount().fullTime();
 //************************************************************** */