const path = require('path');
const os = require('os');
const fs = require('fs');




fs.readFile('myFiles.txt', (err, data) => {
    console.log(data);
    console.log(data.toString());
})
console.log('1_hello_world');





// fs.writeFileSync('myFiles.txt', 'Hello I am sohan. ')
// fs.appendFileSync('myFiles.txt', 'I am 18 years old')
// const data = fs.readFileSync('myFiles.txt');
// console.log(data);
// console.log(data.toString());












// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.platform());



// const myPath = 'C:\Users\User\Desktop\Learn Node\index.js';
// console.log(path.extname(myPath));
// console.log(path.dirname(myPath));
// console.log(path.parse(myPath));



