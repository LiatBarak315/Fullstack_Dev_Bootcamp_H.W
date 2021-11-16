const numbers = [1, -5, 666, 2, 400, 11];
const descending = (arr) => {
  const des = arr.sort((a, b) => a - b);
  console.log(des);
};
descending(numbers);
//2
const ascending = (arr) => {
  const asc = arr.sort((a, b) => b - a);
  console.log(asc);
};
ascending(numbers);