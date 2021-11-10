function Password(password) {
  if (password.length > 7) {
    console.log("strong");
  } else console.log("week");
  password.length > 7 ? console.log("Strong") : console.log("Weak");
}
Password('1234567');
/*function Ppassword(password){
    if (password.length > 7&&) {
        console.log("strong");
}*/
