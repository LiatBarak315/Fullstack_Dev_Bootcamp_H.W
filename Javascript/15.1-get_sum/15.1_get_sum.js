function getSum(arr1, arr2) {
  let sum = 0; //from const to let
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;//add a return
}
console.log(getSum([1, 2, 3], [5, 66, 23]));//A comma between the arrays and the removal of round brackets
