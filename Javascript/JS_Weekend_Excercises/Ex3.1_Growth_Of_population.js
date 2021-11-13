const nb_year = (n) => {
  let p0 = n[0];
  let percent = n[1] / 100;
  let aug = n[2];
  let num = n[3];
  let i = 0;
  while (p0 + p0 * percent + aug <=num) {
    p0 = p0 + p0 * percent + aug;
    i++;
  }
  return ++i;
};
console.log(nb_year([1500, 5, 100, 5000])); // 15
console.log(nb_year([1500000, 2.5, 10000, 2000000])); // 10
console.log(nb_year([1000, 2, 50, 1200])); // 3
