const element = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
console.log(element);
const swapped = Object.fromEntries(Object.entries(element).map((a) => a.reverse()));
console.log(swapped);
