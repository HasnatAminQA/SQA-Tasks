function solution(inputArray) {
    let longestLength = 0; // Initialize the length of the longest strings
    let longestStrings = []; // Initialize an array to store the longest strings

    // Loop through each string in the input array
    for (let i = 0; i < inputArray.length; i++) {
        const currentLength = inputArray[i].length; // Get the length of the current string

        // If the current string is longer than the longest recorded length
        if (currentLength > longestLength) {
            longestLength = currentLength; // Update the longest length to the currentLength
            longestStrings = [inputArray[i]]; // Replace the longest strings array with the current string
        } else if (currentLength === longestLength) //If the currentLength is equal to the longestLength, it means another string of the same length is found
        {
            longestStrings.push(inputArray[i]); // Add the current string to the longest strings array using the .push() method.
        } //The loop continues to iterate through the other strings in the inputArray.
    }
          
    return longestStrings; // function returns the array of longest strings as the output
}

// Example usage demonstrates how to use the solution function with a sample inputArray and outputs an array 
//containing the longest strings from the input.
const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(solution(inputArray)); // Output: ["aba", "vcd", "aba"]