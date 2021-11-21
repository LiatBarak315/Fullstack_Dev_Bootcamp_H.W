const accum = (str) => {
  let Nstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(i)) {
      Nstr += str.charAt(i);
    } else {
      Nstr += str.charAt(i).toUpperCase();
    }
  }
  let j = 1;
  let mumb = "";
  for (let i = 0; i < Nstr.length; i++, j++) {
    let letters = Nstr.slice(i, j) + str.charAt(i).toLowerCase().repeat(i);
    mumb += letters + "-";
  }
  return '"' + mumb.slice(0, -1) + '"';
};
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
console.log(accum("abplkju"));
