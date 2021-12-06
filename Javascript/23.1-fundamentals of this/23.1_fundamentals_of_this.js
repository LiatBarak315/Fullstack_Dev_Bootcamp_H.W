//1
console.log(this);
//Refers to the window It's global
//2
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
//arrow func do not get their own this keyword Pointing up to the the parent scope.
//3
const myFuncDec = function () {
  console.log(this);
};
myFuncDec();
//
//4
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//arrow func do not get their own this keyword Pointing up to the the parent scope.
//5
document.querySelector(".element").addEventListener("click",() => {
  console.log(this);
});
//
