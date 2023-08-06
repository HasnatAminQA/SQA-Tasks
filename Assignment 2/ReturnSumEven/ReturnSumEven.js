function ReturnSumEven(array){
    let sum = 0; // Initialize sum so to keep track of the running total of even numbers
    for (let i = 0; i < array.length; i++) // loop to iterate through each element of the input array
    {
      if (array[i] % 2 === 0) // to check if the element is even using strict equality operator
      {
        sum += array[i]; //if even even, adds it to sum
      }
    }
    return sum; // contains the total sum of all even numbers in an array
};
  let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(ReturnSumEven(inputArray)); // Output