
//prints numbers from 100 to 200
//if number is multiple of 3, string 'loopy'
//if the number is multiple of 4, string 'lighthouse'
//if both, string 'LoopyLighthouse'

for (const num of nums) {
  let output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
  //Output is an empty string, "", then it means we haven't added neither "Loopy" nor "Lighthouse" , num isn't be divisible by 3 or 4, so we print num. 
  //If output is not an empty string, then we've added "Loopy", "Lighthouse" or both to it and so we print output instead.
}