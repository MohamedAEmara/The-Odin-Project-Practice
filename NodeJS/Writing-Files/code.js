const fs = require('fs');

const content = 'Some content!';

fs.writeFile('./output.txt', content, err => {
    if(err) {
        console.error(err);
    }
});

// Alternatively, you can use the synchronous version fs.writeFileSync():

// const fs2 = require('fs');

const content2 = 'Another Line..';

try {
    fs.writeFileSync('./output.txt', content2);
} catch (err) {
    console.error(err);
}


// You can modify the default by specifying a flag:

fs.writeFile('./output.txt', content, { flag: 'a+' }, err => {});

// The flags you'll likely use are:

/*
    r+ open the file for reading and writing
    w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if it does not exist
    a open the file for writing, positioning the stream at the end of the file. The file is created if it does not exist
    a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if it does not exist

*/


// ======================== Append to a file ==================================== //

fs.appendFile('output.txt', '\n', err => {
    if(err) {
        console.error(err);
    }
})
fs.appendFile('output.txt', content, err => {
    if(err) {
        console.error(err);
    } 
});
