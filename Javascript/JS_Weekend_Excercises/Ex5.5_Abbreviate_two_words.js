const initials = (n) => {
  let init = [n.charAt(0).toUpperCase()];
  for (let i = 0; i < n.length; i++) {
    if (n[i] === " ") {
      init += "." + n.charAt(i + 1).toUpperCase();
    }
  }
  return init;
};
console.log(initials("Sam Harris")); // => S.H
console.log(initials("Patrick Feeney")); //=> P.F