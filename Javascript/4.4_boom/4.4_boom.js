function Boom(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 7 === 0 && i.toString().includes("7")) {
      console.log("boom-boom");
    } else if (i % 7 == 0) {
      console.log("boom");
    } else console.log(i);
  }
}
Boom(77);