function solution(a) {
    let team1 = 0;
    let team2 = 0;

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0)  // If the index is even, add the weight to team 1
        {
            team1 = team1 + a[i];
        } else // If the index is odd, add the weight to team 2
        { 
            team2 = team2 + a[i];
        }
    }

    return [team1, team2];
};
// Example usage:
const weights = [50, 60, 60, 45, 70];
const result = solution(weights);
console.log(result); // Output: [180, 105]
