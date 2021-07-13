const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write(`
        <html>
            <head>
                <body>
                    <form method="post" action="/process">
                        <input type='text' name="message"/>    
                    </form>                
                </body>
            </head>
        <html/>
        `)
        res.end('')
    } else if (req.url === '/process' && req.method === 'POST') {

        req.on('data', (chunk) => {
            console.log(chunk);
            res.write('Thank You for Submitting');
            res.end('')
        })
    } else {
        res.write('Not found')
        res.end('')
    }
});
server.listen(5000)

console.log(`listening on port 5000`);