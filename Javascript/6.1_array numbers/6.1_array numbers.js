const arr = [1, 7, 3, 0, -5, 7, 3, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
const arrayLength = (arr) => {
  let count = 0;
  for (let i = 0; arr[i] !== NaN; i++) {
    count++;
  }
  console.log(count);
};
const arraySum = (arr) => {
  let sum = 0;
  for (let i = 0; arr[i] !== NaN; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
};
const arrayMulti = (arr) => {
  let sum = 0;
  for (let i = 0; arr[i] !== NaN; i++) {
    sum = sum + arr[i] * 2;
  }
  console.log(sum);
};
arrayLength(arr);
//arraySum(arr);
//arrayMulti(arr);
