const toWeirdCase = (n) => {
  let capitalized = [""];
  for (let i = 0; i < n.length; i++) {
    if (!(i % 2)) {
      capitalized += n.charAt(i).toUpperCase();
    } else capitalized += n.charAt(i);
  }
  return capitalized;
};
console.log(toWeirdCase("String")); //=> returns "StRiNg"
console.log(toWeirdCase("Weird string case")); //=> returns "WeIrD StRiNg CaSe"