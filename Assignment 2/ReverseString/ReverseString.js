function ReverseString(inputStr) {
    let reversestr = ''; //empty string initialized here
    for (let i = inputStr.length - 1; i >= 0; i--) //loop through the input string in reverse order
    {
      reversestr += inputStr[i]; // during each iteration, a character is added to the reversestr
    }
    return reversestr; // here reversestr is returned, which contains reveresed version of the input
}; 
  let input = "hello!, hasnat";
  console.log(ReverseString(input)); // Output is  returned