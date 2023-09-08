const http = require('http');
const hostname = '127.0.0.1';
const port = 2000;

const server = http.createServer((req, res) => {
    // Set the response http header with HTTP status and Current type 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!!');
});

// Listen for request on port 2000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log('Server is running on ' + hostname + ':' + port);
})