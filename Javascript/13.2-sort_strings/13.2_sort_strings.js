const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const descending = (arr) => {
  const des = arr.sort();
  console.log(des);
};
descending(foods);
//a2
const ascending = (arr) => {
  const asc = arr.sort().reverse();
  console.log(asc);
};
ascending(foods);
//b
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
//b1

const descend = (arr, i) => {
  const low = foodsWithUpperCase.map((name) => name.toLowerCase());
  const des = low.sort();
  console.log(des);
};
descend(foodsWithUpperCase);
//b2
const ascend = (arr) => {
  const lo = foodsWithUpperCase.map((name) => name.toLowerCase());
  const asc = lo.sort().reverse();
  console.log(asc);
};
ascend(foodsWithUpperCase);
//c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const lengthWord = (arr) => {
  const list = words.sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(list);
};
lengthWord(words);
