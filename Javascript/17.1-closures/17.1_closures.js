//1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);//return 5 because b value in the functions skoup
//2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();//return undefine because its nat have a value
console.log(a); //return 1
//3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
//will prin 3 times 3 because it saves i and not the resault at time out.100
