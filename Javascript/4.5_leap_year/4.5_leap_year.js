function leapYear(n) {
  if (n % 4 && n % 100 && n % 400) {
    console.log("It is indeed a leap year");
  } else if (n % 4 && n % 100) {
    console.log("This is not a leap year");
  } else if (n % 4) {
    console.log("It is indeed a leap year");
  } else console.log("This is not a leap year");
}