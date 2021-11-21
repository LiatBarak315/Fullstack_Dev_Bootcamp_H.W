const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
//1
function names(arr) {
  let name = [];
  arr.forEach((m) => {
    name.push(m.name);
  });
  console.log(name);
  return name;
}
names(data);
//2
const born = (data, limit) => {
  let res = [];
  data.forEach((instance) => {
      let year = parseInt(instance.birthday.slice(-4), 10);
      if (year < limit)
          res.push(instance);
  });
  return res;
}
console.log(born(data,1990));
//3
const objFoods = (data) => {
  let foods_fish = [];
  let foods_meat = [];
  data.forEach((instance) => {
    foods_fish = foods_fish.concat(instance.favoriteFoods.fish);
    foods_meat = foods_meat.concat(instance.favoriteFoods.meats);
  });
  let setFish = new Set(foods_fish);
  let setMeat = new Set(foods_meat);
  let shortFish = Array.from(setFish);
  let shortMeat = Array.from(setMeat);
  const result = {};
  shortFish.forEach((item) => {
    let num = foods_fish.filter((x) => x === item).length;
    result[item] = num;
  });
  shortMeat.forEach((item) => {
    let num = foods_meat.filter((x) => x === item).length;
    result[item] = num;
  });
  return result;
};
console.log(objFoods(data));
