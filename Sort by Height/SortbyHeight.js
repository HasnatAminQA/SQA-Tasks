function solution(a) //define the solution function that takes an array a as an argument
{
  // Extract heights of people and sort them
  const heights = a.filter(height => height !== -1).sort((a, b) => a - b);
  //Inside the function, first filter out the elements that are not equal to -1 (representing trees) and sort them in ascending order
  let heightIndex = 0; //Initialize a variable heightIndex to keep track of the current index in the heights array:
  const result = a.map(height => {
    if (height !== -1) {
      const newHeight = heights[heightIndex];
      heightIndex++;
      return newHeight;
    }
    return height;
  });  //Create a new array result using the map function. For each element height in the input array a, replace it with the corresponding height from the heights array if it's not a tree, and keep it as it is if it's a tree.

  return result; //Finally, return the result array
}

// Example usage
const a = [-1, 150, 190, 170, -1, -1, 160, 180];
const sortedArray = solution(a);
console.log(sortedArray); // Output: [-1, 150, 160, 170, -1, -1, 180, 190]