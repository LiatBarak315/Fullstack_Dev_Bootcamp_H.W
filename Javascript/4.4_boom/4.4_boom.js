function Boom(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 7) {
      console.log("boom-boom");
      i++;
    } else if (i % 7 == 0) {
      console.log("boom");
      i++;
    }
    console.log(i);
  }
}