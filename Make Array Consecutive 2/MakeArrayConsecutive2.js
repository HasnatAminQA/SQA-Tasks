function solution(statues) //solution function takes an array statues as its input.
{
  statues.sort((a, b) => a - b); // sorts the statues array in ascending order.
  let additionalStatues = 0; //initializes a variable additionalStatues.
  for (let i = 1; i < statues.length; i++) //for loop iterates through the sorted array, starting from index 1.
  {
    const difference = statues[i] - statues[i - 1]; // constant difference represents the gap between consecutive sizes.
    additionalStatues += difference - 1; // additional statues calculates the number needed to fill the gap between consecutive sizes. 
    //The - 1 is subtracted because the statues need to be exactly one larger than the previous size.
  }
    return additionalStatues; //statement returns the total number of additional statues needed.
};

// The example usage at the end demonstrates how to call the solution function with the statues array 
const statues = [6, 2, 3, 8];
const result = solution(statues);
console.log(result);