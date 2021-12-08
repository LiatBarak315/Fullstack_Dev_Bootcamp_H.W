const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.every((word) => typeof word === "string"))
        resolve(arr.map((name) => name.toUpperCase()));
      else reject("not good");
    }, 1000);
  });
};

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.sort());
    }, 1000);
  });
}

makeAllCaps(["Ali", "Atta", "Alex", "John"])
  .then((res) => {
    console.log(res);
    return sortWords(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  
  makeAllCaps(["Ali", "Atta", "Alex", "John",4,6])
  .then((res) => {
    console.log(res);
    return sortWords(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
