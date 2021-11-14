const maskify = (n) => {
  let mask = [""];
  for (i = 0; i < n.length - 4; i++) {
    mask += "#";
  }
  mask += n.slice(i);
  return mask;
};
console.log(maskify("4556364607935616")); //== "############5616"
console.log(maskify( "64607935616"));//== "#######5616"
console.log(maskify(           "1")); //== "1"
console.log(maskify(            "")); //==