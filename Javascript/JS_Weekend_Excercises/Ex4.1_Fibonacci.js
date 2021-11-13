const Fib = (n) => {
  let a = n[0];
  let b = n[1];
  let c = 0;
  for (let i = 2; i < n[2]; i++) {
    c = a;
    a = b;
    b += c;
  }
  return b;
};
console.log(Fib([0, 1, 12]));
console.log(Fib([1, 1, 12]));