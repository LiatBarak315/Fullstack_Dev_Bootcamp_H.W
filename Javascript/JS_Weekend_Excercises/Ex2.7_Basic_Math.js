const basicOp = (n) => {
  switch (n[0]) {
    case "+":
      return n[1] + n[2];
      break;
    case "-":
      return n[1] - n[2];
      break;
    case "/":
      return n[1] / n[2];
      break;
    case "*":
      return n[1] * n[2];
      break;
    default:
      console.log("moo");
  }
};
console.log(basicOp(["+", 4, 7])); // Output: 11
console.log(basicOp(["-", 15, 18])); // Output: -3
console.log(basicOp(["*", 5, 5])); // Output: 25
console.log(basicOp(["/", 49, 7])); // Output: 7
