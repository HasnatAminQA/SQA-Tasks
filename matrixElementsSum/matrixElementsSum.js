function solution(matrix) //solution function takes a matrix as its input parameter. calculate the total sum of suitable rooms
{
    let totalSum = 0; //totalSum variable is initialized to keep track of the sum of suitable room costs.
    for (let col = 0; col < matrix[0].length; col++) //outer for loop iterates through each column of the matrix using the col variable
    {
        let haunted = false; //haunted is initialized to false for each column, to check if there's a haunted room in the column.
        for (let row = 0; row < matrix.length; row++) //This for loop iterates through each row of the current column using the row variable.
        {
            if (matrix[row][col] === 0) //if the current room's cost is 0, indicating a haunted room.
            {
                haunted = true; //If a haunted room is found in the column, the haunted is set to true.
            }
            if (!haunted) //If the room is not haunted, the room's cost is added to the totalSum.
            {
                totalSum += matrix[row][col];
            }
        }
    }
    return totalSum; //After both loops finish, the totalSum represents the sum of costs for all suitable rooms. Function returns the total sum.
}

// Example
const matrix1 = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
];
console.log(solution(matrix1)); // Output: 9

const matrix2 = [
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10]
];
console.log(solution(matrix2)); // Output: 9