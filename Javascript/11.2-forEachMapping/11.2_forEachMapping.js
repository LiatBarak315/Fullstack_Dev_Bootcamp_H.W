const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const ddoubleValuesett = numbers.map(function (m) {
  return m * 2;
});
console.log(ddoubleValuesett);
//2
function onlyEvenValues(arr) {
  let det = [];

  arr.forEach((m, i) => {
    if (m % 2 == 0) {
      det.push(m);
    }
  });
  console.log(det);
  return det;
}
onlyEvenValues(numbers);
//3
const showFirstAndLast = (arr) => {
  let result = [];

  arr.forEach((value) => {
    if (typeof value !== "string" || !value.length) {
      return;
    }
    if (value.length === 1) {
      result.push(value);
    } else {
      result.push(value[0] + value[value.length - 1]);
    }
  });
  return result;
};
let list = [1, "abc", "ab", "5", "abcd", "a"];
//console.log(showFirstAndLast(list));
//4
const str = "I'm learning JavaScript at Apple BootCamp";
const vowlCount = (str) => {
  let result = [];
  const charArray = Array.from(str.toLowerCase());
  charArray.forEach((char) => {
    if ("aeiou".includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  });
  return result;
};
console.log(vowlCount(str));
//5
const capital = (str) => {
  let result = [];
  const wordArray = str.split(" ");
  wordArray.forEach((word) => {
    let capiWo = word.toUpperCase();
    result.push(capiWo);
  });
  return result.join(" ");
};
const stri = "I'm learning JavaScript at Apple BootCamp";
console.log(capital(stri));
//6
const shiftLetters = (str) => {
  let result = [];
  const letterArray = str.split("");
  letterArray.forEach((letter) => {
    let charcode = letter.charCodeAt(0);
    if (charcode > 96 && charcode < 123) {
      if (charcode === 97) charcode = 122;
      else charcode -= 1;
    } else {
      if (charcode > 64 && charcode < 91) {
        if (charcode === 65) charcode = 90;
        else charcode -= 1;
      }
    }
    result.push(String.fromCharCode(charcode));
  });
  return result.join(""); 
};
console.log(shiftLetters("I'm learning JavaScript at Apple BootCamp"));
//7
const swapCase = (str, func) => {
  let result = [];
  let num = 0;
  const wordArray = str.split(" ");
  wordArray.forEach((word) => {
    let wo = word;
    if (num % 2) {
      wo = func(word);
    }
    num++;
    result.push(wo);
  });
  return result.join(" "); 
};

const arr7 = "I'm learning JavaScript at Apple BootCamp";
console.log(swapCase(arr7,capital));
