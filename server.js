const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('This is Home Page')
        res.end('')
    } else if (req.url === '/about') {
        res.write('This is About Page');
        res.end('')
    } else {
        res.write('Not found')
        res.end('')
    }
});

server.listen(5000)

console.log(`listening on port 5000`);