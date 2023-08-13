// ========================== GET Request ======================== //

const axios = require('axios');

axios
    .get('https://example.com/todos')
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    })

// The previou way uses 3rd party library

// But Get request is possible jusing using the Node.js standard modules

const https = require('https');

const options = {
    hostname: 'google.com',
    port: 443,
    
    method: 'GET',
};



const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
        console.log('gooood');
    });
});

req.on('error', error => {
    console.error(error);
    alert('aghhhhhhhhhhh');
});

req.end();


// =========================== POST Request ========================= //

const axios = require('axios');

axios
    .post('https://whatever.com/todos', {
        todo: 'Buy the milk',
    })
    .then(res => {
        console.log('statusCode: ' + res.statusCode);
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })


// ============ Antoher way ============= //


const https = require('https');

const data = JSON.stringify({
    todo: 'Buy the milk',
});

const options2 = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    },
};


const req2 = https.request(options2, res => {
    console.log('statusCode: ' + res.statusCode);

    res.on('data', d => {
        process.stdout.write(d);
    })
})


req.on('error', error => {
    console.error(error);
});


req.write(data);
req.end();