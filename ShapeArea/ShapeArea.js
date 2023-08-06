function solution(n) { // solution(n) is a function
    if (n === 1)  
    { 
      return 1;  // If n is equal to 1, it returns 1 (the base area of the 1-interesting polygon).
    } 
    else 
    {
      let a = 1;  //For n > 1, it initializes a to 1;
      for (let i = 1; i < n; i++) //for loop iterates from i = 1 to n-1
      { 
        a = a + 4 * i; //In each iteration, it updates the area a by adding 4 * i 
        //(4 * i represents the number of new squares added to the polygon at each iteration)
    }
      return a; //Finally, the loop returns the total area a.
    }
  }
  console.log(solution(1));
  console.log(solution(2));
  console.log(solution(3));
  console.log(solution(4));