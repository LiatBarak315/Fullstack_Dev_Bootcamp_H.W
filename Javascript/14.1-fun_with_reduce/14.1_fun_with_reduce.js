const num = [50, 22, 15, 3, 46, 444];
const maxN = num.reduce((max, cur) => {
  if (cur > max) return cur;
  return max;
});
console.log(maxN);
//2
const sumOfEven = num.reduce((a, b) => {
  if (b % 2 === 0) return a + b;
  return a;
}, 0);
console.log(sumOfEven);
//3
const avg = num.reduce((a, b) => {
    return a + b;
  
});
const av=avg/num.length;
console.log(av);
