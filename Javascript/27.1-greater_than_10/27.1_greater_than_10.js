const grateThenTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num >= 10) resolve();
    else reject();
  });
  //   grateThenTen.then(() => {
  //     console.log("greater than 10");
  //   });
  //   grateThenTen.catch(() => {
  //     console.log("less than 10");
  //   });
};
grateThenTen(8)
  .then(() => {
    console.log("greater than 10");
  })
  .catch(() => {
    console.log("less than 10");
  });
