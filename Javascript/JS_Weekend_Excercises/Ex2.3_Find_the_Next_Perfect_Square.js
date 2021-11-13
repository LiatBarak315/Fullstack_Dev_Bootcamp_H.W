let Nnum = 0;
const square = (n) => {
  if (!(Math.sqrt(n) % 1)) {
    Nnum = Math.sqrt(n);
    Nnum = (Nnum + 1) ** 2;
  } else Nnum = -1;
  console.log(Nnum);
};
square(121);
square(625);
square(114);