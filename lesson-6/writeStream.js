const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/myFiles.txt`);

const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk);
// })

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// })

ourReadStream.pipe(ourWriteStream);