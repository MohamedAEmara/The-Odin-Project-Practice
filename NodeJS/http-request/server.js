const https = require('https');


https.get('https://www.google.com/', response => {
    let data = '';
    response.on('data', chunck => {
        data += chunck;
    });

    response.on('end', () => {
        console.log('Request finished!!');
    })
})