const repeat_str = (str, n) => {
  let newString = "";
  while (n > 0) {
    newString += str;
    n--;
  }
  return newString;
};
console.log(repeat_str("I", 6)); // "IIIIII"
console.log(repeat_str("Hello", 5)); // "HelloHelloHelloHelloHello"
