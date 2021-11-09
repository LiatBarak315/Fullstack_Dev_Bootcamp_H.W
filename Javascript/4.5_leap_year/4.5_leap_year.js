function leapYear(n) {
  if (n % 4===0 && n % 100===0 && n % 400===0) {
    console.log("It is indeed a leap year");
  } else if (n % 4===0 && n % 100===0) {
    console.log("This is not a leap year");
  } else if (n % 4===0) {
    console.log("It is indeed a leap year");
  } else console.log("This is not a leap year");
}
leapYear(2400)