const count = (str1) => {
  let a = str1.split("").sort();
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i+1]) {
      counter++;
    }
  }
  return counter;
};
console.log(count("abcd"));
console.log(count("RqaEzty"));
console.log(count("cwAt"));
console.log(count("abbbbccdde"));
