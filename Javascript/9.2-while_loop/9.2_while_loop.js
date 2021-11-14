function percentageOfWorld1(population) {
  return Math.round(((population * 100) / 7900 + Number.EPSILON) * 100) / 100;
}
const population = [500, 350, 1478, 25];
function populationPercentages(popu_arr) {
  const percentages = [];
  let i = 0;
  while (i < popu_arr.length) {
    percentages.push(percentageOfWorld1(popu_arr[i]));
    i++;
  }
  return percentages;
}
console.log(populationPercentages(population));
