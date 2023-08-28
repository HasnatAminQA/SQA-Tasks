function solution (inputString) // function takes an inputString as its argument and returns the modified string after reversing characters within parentheses
{
    const stack = []; // stack is used to keep track of characters as we iterate through the input string
    
    for (let char of inputString) // loop iterates through each character of the inputString.
    {
        if (char === ')') // If the character is a closing parenthesis ), the function enters a block to reverse characters within the parentheses.
        {
            let reversed = ''; //Inside the block, a variable reversed is initialized to an empty string.
            while (stack.length > 0 && stack[stack.length - 1] !== '(') //A while loop continues as long as there are characters in the stack and 
            //the top of the stack is not an opening parenthesis (.

            {
                reversed += stack.pop(); //Within the loop, characters are popped from the stack and added to the reversed string in reverse order.
            }
            stack.pop(); // Remove the '('
            stack.push(...reversed); //characters in the reversed string are spread into the stack, effectively adding them in the reversed order.
        } else {
            stack.push(char); //If the character is not a closing parenthesis, it is simply pushed onto the stack.
        }
    }
    
    return stack.join(''); //After processing all characters, the modified string is obtained by joining the characters in the stack.
}

// Test cases
console.log(solution("(bar)")); // Output: "rab"
console.log(solution("foo(bar)baz")); // Output: "foorabbaz"
console.log(solution("foo(bar)baz(blim)")); // Output: "foorabbazmilb"
console.log(solution("foo(bar(baz))blim")); // Output: "foobazrabblim"