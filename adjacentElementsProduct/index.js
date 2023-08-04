function solution(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }
  return maxProduct;
};
const inputArray = [3, 6, -2, -5, 7, 3];
console.log(solution(inputArray));