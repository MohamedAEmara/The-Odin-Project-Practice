const fs = require('fs');

// fs.readFile('./file-to-read.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
//     // This will print the file as it is in the console
// })

// We can also use the promise-based fsPromises.readFile() method offered by the fs/promises module:

// async function example() {
//     try {
//         const data = await fs.readFile('./file-to-read.txt', {encoding: 'utf-8'});
//         console.log(data);
//         console.log('yessss');
//     } catch (err) {

//         console.log('noooooo');
//         console.log(err);
//     }
// }

async function example() {
    try {
      const data = await fs.readFile('/file-to-read.txt', { encoding: 'utf8' });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

example();