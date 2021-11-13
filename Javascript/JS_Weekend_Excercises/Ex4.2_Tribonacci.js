const Trib = (sig, n) => {
  let tribo = sig;
  if (n == 0) {
    tribo = [];
    return tribo;
  } else
    for (let i = 2; i < n; i++) {
      tribo.push(tribo[i] + tribo[i - 1] + tribo[i - 2]);
    }
  return tribo;
};
console.log(Trib([1, 1, 1], 0));
console.log(Trib([0, 1, 1], 7));