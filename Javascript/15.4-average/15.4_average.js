function calcAverage(arr) {
  var sum=0;//get a value of 0 to initializing counter
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;//to return a avg i devided with the length
}
calcAverage([85, 90, 92]);
