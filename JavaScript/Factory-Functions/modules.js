// ========= Modules ========= //

/* 
    Modules are very similar to factory functions. The main difference is 
    how they're created.
*/

// Example on module:

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    return {
        add, 
        sub, 
        mul,
        div
    };
})();

console.log(calculator.add(6, 2));       // 8
console.log(calculator.sub(6, 2));       // 4
console.log(calculator.mul(6, 2));       // 12

/*
    The concepts are exactly the same as the factory function. 
    However, instead of creating a factory that we can use over and over again 
    to create multiple objects, the module pattern wraps the factory in an 
    IIFE (Immediately Invoked Function Expression).
*/

const calculator2 = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    return {
        add, 
        sub, 
        mul,
        div
    };
});

console.log(calculator2.add(12, 1));        // Error calculate2.add() is not a function
// can't access add or other innner function if I removed the () after the function.

// ================ Mamed VS IIFE ================//

// Named function declaration:
/*
    function myFunction() { logic here }
*/

// Assignment of a function expression to a variable
/*
    var myFunction = function () { logic here  };
*/

// Assignment of a function expression to a property
/*
    var myObj = {
        myfunction: function() { Logic here }
    };
*/



// create a module with a private function inside.

const Formatter = (function() {
    console.log('start');
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

})();

// Caller:
Formatter.log('Hello');     // can't read log property.
// We have to add return {log} to expose log outside the function.







