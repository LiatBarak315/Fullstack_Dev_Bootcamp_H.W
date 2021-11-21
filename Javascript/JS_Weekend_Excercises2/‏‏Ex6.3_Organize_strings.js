const org = (str1, str2) => {
  let a = str1.concat(str2).split("").sort();
  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] === a[i]) {
      a.splice(i - 1, 1);
      i--;
    }
  }
  a = a.join("");
  return '"'+a+'"';
};
console.log(org("asdfghjkxcvbnerfc", "aerrsa"));
