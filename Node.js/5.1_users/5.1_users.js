const yargs = require("yargs");
const users = require("./user.js");

yargs.command({
  command: "add",
  describe: "Add a new user",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
    id: {
      describe: "user id",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    users.addUsers(argv.name, argv.email, argv.id);
  },
});
yargs.command({
  command: "read",
  describe: "read a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.readUsers(argv.name);
  },
});
yargs.command({
  command: "update",
  describe: "Update a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
    newName: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.updateUsers(argv.id, argv.newName);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a user",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.removeUsers(argv.id);
  },
});
yargs.parse();
