function Grades() {
  let grade1 = 89;
  let grade2 = 120;
  let grade3 = 103;
  let gradea = 116;
  let gradeb = 94;
  let gradec = 123;
  let grade4 = 97;
  let grade5 = 134;
  let grade6 = 105;
  let sumJ = (grade1 + grade2 + grade3) / 3;
  let sumM = (gradea + gradeb + gradec) / 3;
  let sumMr = (grade4 + grade5 + grade6) / 3;
  if (sumJ > sumM && sumJ > sumMr) {
    console.log("John's team score " + sumJ);
  } else if (sumM > sumJ && sumM > sumMr) {
    console.log("Mike's team score " + sumM);
  } else if (sumMr > sumM) {
    console.log("Mary's team score " + sumMr);
  } else console.log("A Draw");
}
