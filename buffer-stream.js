const fs = require('fs');



const ourReadStream = fs.createReadStream(`${__dirname}/myFiles.txt`, 'utf8');

ourReadStream.on('data', (chunk) => {
    console.log(chunk);
})

