const isString = (n, callback) => {
  if (typeof n === "string") callback(n);
};
const callback = (n) => {
  console.log(n);
};
isString("dncbdncdeiffj", callback);
