const http = require('http');

const hostname = "127.0.0.1";

const port = 8000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Hello World\n");
});


server.listen(port, hostname, () => {
    console.log('Server is running at http://' + hostname + port);
})


// navigate to http://localhost:8000
// and you'll find a page with "hello world" in it
