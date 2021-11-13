const arr = [
  [4, 0],
  [3, 2],
  [4, 3],
];
const Pbus = (n) => {
  let sumb = 0;
  for (let i = 0; i < n.length; i++) {
    sumb += arr[i][0] - arr[i][1];
  }
  return sumb;
};
console.log(Pbus(arr));