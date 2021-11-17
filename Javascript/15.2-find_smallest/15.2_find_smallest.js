function findSmallest(a, b, c) {
  if (a < b < c) {//Changing the signs from big to small to achieve the small value
    return c;
  } else if (a < c < b) {//Changing the signs from big to small to achieve the small value 
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);//missing a letter in the func name
