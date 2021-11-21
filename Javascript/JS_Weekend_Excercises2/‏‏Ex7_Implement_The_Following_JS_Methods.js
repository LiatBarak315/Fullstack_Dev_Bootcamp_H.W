const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const nums=[1,2,3,4,5,6,7,8,9,0];
const filt = (arr) => {
  const result = arr.filter((word) => word.includes("i"));

  return result;
};
console.log(filt(words));

const forea = (array) => {
  let arr = [];
  array.forEach((element) => (arr += " " + element.toUpperCase()));
  return arr;
};
console.log(forea(words));

const mapp = (nums) => {
  const arr = nums.map((x) => x*2);
  return arr;
};
console.log(mapp(nums));
