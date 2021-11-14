function steps(num) {
  let arr = ["'"];
  for (let i = 0; i < num; i++) {
    arr.push("#");
    for (j = num - i - 1; j > 0; j--) {
      arr.push(" ");
    }
    arr.push(["'"]);
    console.log(arr.join(""));
    for (j = num - i - 1; j > 0; j--) {
      arr.pop();
    }
  }
}
steps(3);