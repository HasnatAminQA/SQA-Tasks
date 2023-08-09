function solution(sequence) {
    let count = 0; // Initialize the count of removed elements  
    for (let i = 1; i < sequence.length; i++) //iterates through the sequence array starting from the second element (index 1).
    {
      if (sequence[i] <= sequence[i - 1]) {
        count++; // Increment the count if current element is not strictly greater  
        if (count > 1)   // If more than one element needs to be removed, return false
        {
          return false;
        };
        if (i === 1 || sequence[i] > sequence[i - 2]) // Check if removing the current or previous element results in a valid sequence
        {
          sequence[i - 1] = sequence[i]; // Remove previous element
        } else {
          sequence[i] = sequence[i - 1]; // Remove current element
        }
      }
    }  
    return true; // If the loop completes, return true
  }
  // Example usage
  const sequence1 = [1, 3, 2, 1];
  console.log(solution(sequence1)); // Output: false
  const sequence2 = [1, 3, 2];
  console.log(solution(sequence2)); // Output: true