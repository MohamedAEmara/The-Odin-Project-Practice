// =========================== NPM ============================== //
// npm is a standard package manager for Node.js
// npm manages downloads of dependencies of your project

/*

Installing all dependencies..
if a project has a package.json file, by running 
$ npm install 
     It will install everything the project needs, in the node_modules folder
     creating it if it's not existing already.


*/

// YOu can also install a specific package by running..
// $ npm install <package-name>


// Important flags added to this command..

/**
 *  --save-dev      ==>     installs and adds the entry to the package.json file devDependencies
 *  --no-save       ==>     installs but does not add the entry to the package.json file dependencies 
 *  --save-optional ==>     installs and adds the entry to package.json file
 *  --no-optional   ==>     will prevent optional dependencies from being installed
 * /


                   ============ ShortHands ===========

    Shorthands of the flags 
    -S    =>   --save
    -D    =>   --save-dev
    -O    =>   --save-optional

    The difference between devDependencies and dependencies is that the former contains development tools, 
    like a testing library, while the latter is bundled with the app in production.
*/


// ================================ npm update ======================================= //
/**  
    $ npm update
    npm will check all packages for a newer version that satisfies your versioning constrains

    // you can specify single package to update..
    $ npm update <package-name>


*/


// ================================= Versioning ======================================= //

// If you want to roll back to a previous version for some reason..
/**  
    $ npm install <package-name>@<version>
*/



// ================================ Running Tasks ===================================== //
/**
    $ npm run <task-name>

    For Example:

    {
        "scripts": {
            "start-dev": "node lib/server-development",
            "start": "node lib/server-production"
        }
    }


    It's very common to use this feature to run Webpack:

    {
        "scripts": {
            "watch": "webpack --watch --progress --colors --config webpack.conf.js",
            "dev": "webpack --progress --colors --config --webpack.conf.js",
            "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
        }
    }

    // So you can run these commands instead..
        $ npm run watch
        $ npm run dev
        $ npm run prod
*/