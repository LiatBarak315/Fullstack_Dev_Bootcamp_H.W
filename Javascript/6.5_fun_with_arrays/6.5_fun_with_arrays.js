//1
let arr1 = Array(100).fill(0)
console.log(arr1);
//2
let arr =Array.from({length: 100}, (v, i) => i);
console.log(arr);
//3
const propertyNames = Object.keys(arr1);

console.log(propertyNames);