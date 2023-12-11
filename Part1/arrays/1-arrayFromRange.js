const numbers = arrayFromRange(1, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  //Create empty array
  const output = [];
  for (let i = min; i <= max; i++)
    //Push elements
    output.push(i);
  return output;
}
