//takes a single parameter from the command line, a number, and rolls that many six-sided dice.
//Math.random

let getArgs = function() {
  let myArgs = process.argv.slice(2);
  return myArgs;
};
//let num = process.argv.slice(2);

let diceRoller = function(num) {
  let rollArr = [];
  for (let i = 1; i <= num; i++) {
    let random = Math.floor(Math.random() * 100) + 1;
    rollArr.push(random);
  }
  return rollArr.join(', ');
};
console.log(`Rolled ${getArgs()} dice: ${diceRoller(getArgs())}`);