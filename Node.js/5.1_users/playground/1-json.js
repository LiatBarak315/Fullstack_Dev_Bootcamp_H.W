const fs = require('fs');
// const user={
//     Id: '123',
//  Name:'nom',
//  Email:'123@gmail.com',
// }
// const userjson=JSON.stringify(user);
// // console.log(userjson);
// // const parseuser=JSON.parse(userjson);
// // console.log(parseuser.Id);
// fs.writeFileSync('1-json.json', userjson);
const dataBuffer =fs.readFileSync('1-json.json');
const dataJSON=dataBuffer.toString();
const user = JSON.parse(dataJSON);
console.log(user.Name);
user.Name='moly';
user.email='moly@gmail.com';
const userjson=JSON.stringify(user);
fs.writeFileSync('1-json.json', userjson);
