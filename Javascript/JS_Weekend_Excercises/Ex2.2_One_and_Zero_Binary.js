function dec2bin(arr) {
  let value = 0;
  let j = 0;
  for (let i = arr.length - 1; i > -1; i--, j++) {
    value += arr[i] * 2 ** j;
  }
  return value;
}
console.log(dec2bin([0, 0, 0, 1]));
console.log(dec2bin([0, 0, 1, 0]));
console.log(dec2bin([0, 1, 0, 1]));
console.log(dec2bin([1, 0, 0, 1]));
console.log(dec2bin([0, 0, 1, 0]));
console.log(dec2bin([0, 1, 1, 0]));
console.log(dec2bin([1, 1, 1, 1]));
console.log(dec2bin([1, 0, 1, 1]));
