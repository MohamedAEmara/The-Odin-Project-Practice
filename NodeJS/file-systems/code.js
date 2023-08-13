const fs = require('fs');

// once you declare fs, you will be able to access all these methods:

fs.access();        // check if the file eexists and Node.js can access it with tis permissions.

fs.appendFile();    // append data to a file. If the file does not exist, it's created

fs.chmod();         // change the permission of a file specified by the fileneame passed.
                
fs.chown();         // change the owner and group of file specified by the filename passed.

fs.close();         // close the file descriptor

fs.copyFile();      // copies a file


// For more methods:   
//          https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/node-js-modules/node-module-fs.en.md
