const fs = require("fs");
const uniqid = require("uniqid");
const addUsers = function (name, email, id) {
  const users = loadUsers();
  const duplicateUsers = users.filter(function (user) {
    return user.name === name;
  });
  if (duplicateUsers.length === 0) {
    users.push({
      id: uniqid(),
      name: name,
      email: email,
    });
    saveUsers(users);
    console.log("new user");
  } else {
    console.log("user already exists");
  }
};
const readUsers = (id) => {
  const users = loadUsers();
  const user = users.find((user) => {
    user.id === id;
  })
  if (user) {
    console.log(user.name);
    console.log(user.email);
  } else {
    console.log("user not found");
  }
};

const updateUsers = (id, newName) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);
  user.name = newName;
  console.log(user);
  saveUsers(users);
};
const removeUsers = function (id) {
  const users = loadUsers();
  const keptUsers = users.filter(function (user) {
    return user.id !== id;
  });

  if (users.length > keptUsers.length) {
    console.log("User removed");
    saveUsers(keptUsers);
  } else {
    console.log("No user found");
  }
};

const saveUsers = function (users) {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};
const loadUsers = function () {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addUsers: addUsers,
  removeUsers: removeUsers,
  readUsers: readUsers,
  updateUsers: updateUsers,
};
