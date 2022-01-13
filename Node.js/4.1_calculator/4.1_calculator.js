const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Sum the arg",
  builder: {
    a: { describe: "first arg", demandOption: true, type: "number" },
    b: { describe: "sec arg", demandOption: true, type: "number" },
  },
  handler: function ({ a, b }) {
    console.log("The result is", a + b);
  },
});
yargs.command({
  command: "sub",
  describe: "Sum the arg",
  builder: {
    a: { describe: "first arg", demandOption: true, type: "number" },
    b: { describe: "sec arg", demandOption: true, type: "number" },
  },
  handler: function ({ a, b }) {
    console.log("The result is", a - b);
  },
});
yargs.command({
  command: "mult",
  describe: "Sum the arg",
  builder: {
    a: { describe: "first arg", demandOption: true, type: "number" },
    b: { describe: "sec arg", demandOption: true, type: "number" },
  },
  handler: function ({ a, b }) {
    console.log("The result is", a * b);
  },
});
yargs.command({
  command: "pow",
  describe: "Sum the arg",
  builder: {
    a: { describe: "first arg", demandOption: true, type: "number" },
    b: { describe: "sec arg", demandOption: true, type: "number" },
  },
  handler: function ({ a, b }) {
    console.log("The result is", Math.pow(a, b));
  },
});
console.log(yargs.argv.a);
yargs.parse();
