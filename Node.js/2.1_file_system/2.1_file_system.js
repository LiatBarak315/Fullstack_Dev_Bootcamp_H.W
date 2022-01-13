const fs = require('fs');
//1 create a new file txt
fs.writeFileSync('Mytxt.txt','My name is...')
//2 copy the file
fs.copyFileSync('Mytxt.txt','Mytxt2.txt')
//3 rename the file1
fs.renameSync('Mytxt.txt', 'MyNewtxt.txt')
//4 list of files that exist
const testFolder = '../2.1_file_system/';
fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});
//5 new data to file
fs.appendFileSync('Mytxt2.txt', ' add the info');
