const arr = [1, 7, 3, 0, -5, 7, 3, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
const arrayLength = (arr) => {
  let count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }
  return count;
};
const arraySum = (arr) => {
  let sum = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
const arrayMulti = (arr) => {
  let sum = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    sum *= arr[i];
  }
  return sum;
};
console.log(arrayLength(arr));
console.log(arraySum(arr)); 
console.log(arrayMulti(arr));
