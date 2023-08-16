function solution(n) // function here takes an integer n as its input argument, which then aims to determine whether a given ticket number is lucky or not
{
    // Convert the number to a string to work with its digits
    const ticketNumber = n.toString(); // Convert the number to a string to work with its digits
    const length = ticketNumber.length; // length of the ticket number string is determined using the length property.
    const halfLength = length / 2; // halfLength variable is calculated as half of the length of the ticket number string. Since lucky ticket numbers have an even number of digits, this value represents the point at which the string is divided into two halves
   // Two variables, sumFirstHalf and sumSecondHalf, are initialized to store the sums of the digits in the first and second halves of the ticket number, respectively.

    let sumFirstHalf = 0; // sumFirstHalf and sumSecondHalf, are initialized to store the sums of the digits in the first and second halves of the ticket number
    let sumSecondHalf = 0; 
    
    // Calculate the sum of the digits in the first half
    for (let i = 0; i < halfLength; i++) {
        sumFirstHalf += parseInt(ticketNumber[i]); //The loop iterates over the characters of the string from index 0 to halfLength - 1, Each character is converted to an integer using parseInt() and added to the sumFirstHalf
   } 
    // Calculate the sum of the digits in the second half
    for (let i = halfLength; i < length; i++) {
        sumSecondHalf += parseInt(ticketNumber[i]); // loop iterates over the characters of the string from index halfLength to the end of the string. Similarly, each character is converted to an integer and added to the sumSecondHalf
    }
    // Check if the sums of the two halves are equal
    return sumFirstHalf === sumSecondHalf; // if they are equal, it means that the ticket number is lucky and the function returns true. Otherwise, it returns false
}

// Example
console.log(solution(1230)); // Output: true
console.log(solution(239017)); // Output: false