function solution(s1, s2) // this function that takes two strings (s1 and s2) as input and returns the number of common characters between them
{
    const charCount1 = countCharacters(s1); //countCharacters function for both s1 and s2 to create character frequency counts for each string.
    const charCount2 = countCharacters(s2);
    
    let commonCount = 0; // variable commonCount to keep track of the number of common characters
    
    for (const char in charCount1) // loop through each character in the frequency count of s1
    {
        if (charCount2[char]) //for each character, we check if it also exists in the frequency count of s2 using charCount2[char]
        {
            commonCount += Math.min(charCount1[char], charCount2[char]); //if the character exists in both strings, we add the minimum count of that character from both strings to the commonCount
        }
    }
    
    return commonCount; //represents the total number of common characters between the two strings
}

function countCharacters(str) // This function takes a string (str) as input
 {
    const charCount = {};
    
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    return charCount; // returns an object containing the frequency count of each character in the string
}

// Example
const s1 = "aabcc";
const s2 = "adcaa";
console.log(solution(s1, s2)); // Output: 3