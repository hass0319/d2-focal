// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line argument

let getArgs = function() {
  const myArgs = process.argv.slice(2);
  // edge case: We need at least 2 arguments.
  if (myArgs.length < 2) {
    console.log('Please enter at least 2 arguments');
    process.exit();
  }
  return myArgs;
}



// single responsibility => each function should accomplish a single goal
const sum = function (numbers) {
  // console.log('myArgs: ', myArgs, "process.argv:", process.argv);
  // we need an accumulator to hold the sum=0
  let total = 0;

  // goes through each command line argument

  // [1,2,3,4,5]
  for (let num of numbers) {
    // add the current value to the accumulator

    const convertedNum = Number(num);
    // edge case: If any argument is not a number, output an error message.

    if (isNaN(convertedNum)) {
      console.log('Please, enter only numbers');
      // stop the execution
      process.exit();
    }

    // edge case: If any argument is not a whole number, skip it
    if (Number.isInteger(convertedNum)) {
      // convert the current value to a number
      total += convertedNum; // total = total + sum;
    }

    console.log('num', num, 'total:', total);
  }

  // perform checks:

  // print the sum
  return total;
};

const result = sum(getArgs()); // invoking the function => applying the function => executing the function
console.log('result:', result);
