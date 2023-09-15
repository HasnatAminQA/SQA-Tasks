function solution(picture) {
    const bPicture = [];
    const bWidth = picture[0].length + 2;
    let border = "";
for (let i = 0; i < bWidth; i++) {
        border = border + "*";
};
    bPicture.push(border); //created a top border only
for (let row of picture) {
    let bRow = "*";
    for (let char of row) {
        bRow= bRow + char;
    }
        bRow = bRow + '*';
        bPicture.push(bRow);
    };
   bPicture.push(border); //created a last border only
   return bPicture; // returned all the bordered Picture
};

// Example usage:
const picture = ["abc", "ded"];
const bPicture = solution(picture);
console.log(bPicture);