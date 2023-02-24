// You can use a combination of CSS-style selectors and relationship properties to target the nodes you want.

// for example:
/* 
    div.display
    .display
    #container > .display
    div#container > div.display

*/

const continer = document.querySelector('#container');


// You can also use RELATIONAL selectors (firstElementChild or lastElementChild ...)

console.dir(continer.firstElementChild);
// Selects the first child of #continer => .display

const controls = document.querySelector('.controls');
// Select the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display


const child1 = continer.firstElementChild;
console.log(child1);

const child2 = continer.lastElementChild;
console.log(child2);

// So you’re identifying a certain node based on its relationships to the nodes around it.



// ============================== querySelector & querySelectorAll ========================= // 

/*
    element.querySelector(selector)     ===> returns a reference to the first match of selector

    element.querySelectorAll(selector)  ===> returns a "nodelist" contining references to all of the matches
                                             of all the selectors.

*/

/*
    It’s important to note that when using querySelectorAll, the return value is not an array. 
    It looks like an array, and it somewhat acts like an array, but it’s really a “nodelist”. 
    The big distinction is that several array methods are missing from nodelists. 
    One solution, if problems arise, 
    is to convert the nodelist into an array. You can do this with 
        Array.from()    
*/



// ===================================== Element Creation =================================== //

const div = document.createElement('div');
// document.createElement(tagName) creates a new element of tag type tagName. 

/*
    This function does NOT put your new element into the DOM - it simply creates it in memory. 
    This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) 
    before placing it on the page. You can place the element into the DOM with one of the following methods.
*/


// Adding inline styles.
div.style.color = "blue";
child1.style.color = 'red';   // Add the indicated style rule

child2.style.cssText = 'color: blue; background-color: gray;';

// ------------------- NOTES:

// the below line will crash:
// div.style.background-color = "red"; // doesn't work - attempts to subtract color from div.style.background

// Solution to this:
div.style.backgrounColor   = "red"; 
// ======= OR ======= // 
div.style['background-color'] = 'red';
// ======= OR ======= //
div.style.cssText = "background-color: white;"   // ok in a string