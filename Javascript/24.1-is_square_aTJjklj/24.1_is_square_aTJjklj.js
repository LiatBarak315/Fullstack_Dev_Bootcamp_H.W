function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Square.prototype.isSquare = function () {
  if (this.a == this.b && this.a == this.c && this.a == this.d) return true;
  return false;
};
const s=new Square(2,2,2,2);
const s2=new Square(1,2,2,2);
console.log(s.isSquare());
console.log(s2.isSquare());