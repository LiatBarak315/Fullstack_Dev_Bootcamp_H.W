const isogram = (str) => {
  str=str.toLowerCase();
  let t=str.split("").every((c, i) => str.indexOf(c) == i);
return t;
}
console.log(isogram("agffhmnjnm"));
console.log(isogram("axsertyuiop"));
console.log(isogram("aba"));
console.log(isogram("aHGfngm"));