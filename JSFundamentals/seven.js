// 7.

const basketballGame = {
  score: 0,
  foul: 0,
  foulCount(){
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
  console.log('Halftime score is '+this.score);
  console.log('Your total fouls are ' +this.foul);
  return this;
  },
  fullTime() {
   console.log('The game is over') 
  console.log('Fulltime score is '+this.score);
  console.log('Your total fouls are ' +this.foul);
  this.resetScoreAndFoul();
  return this;
  },
  resetScoreAndFoul(){
    this.score =0;
    this.foul = 0;
    return this;
  }

}
  
  //modify each of the above object methods to enable function chaining as below:
  basketballGame.basket().freeThrow().foulCount().freeThrow().basket().threePointer().halfTime().threePointer().freeThrow().foulCount().fullTime();
 //************************************************************** */