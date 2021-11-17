function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
// The answer will be undefined on A and print me the 2, need to decler befor log
//2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
//The answer will be "Aurelio De Rosa" and "John Doe" because test get the function and this became global
//3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
//The answer will be undefined on A and print Number for b
//4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
//the output wiil be 2 times 2 because its log to buttom
//5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); //1
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); //error e is not define , its belong to the func scoupe
//
//6
function funcE() {
  console.log("Value of f in local scope: ", f); //1
}
console.log("Value of f in global scope: ", f); //undefine, the value stay after the log, the decleration gous up
var f = 1;
funcE();
