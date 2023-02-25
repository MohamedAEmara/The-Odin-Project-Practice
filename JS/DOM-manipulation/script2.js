const container = document.querySelector('#container');

// first we get a reference to the container div that already exists in our HTML.
// Then we create a new div and store it in the variable content
// We add a class and some text to the content div 
// and finally append that div to container


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'this is the text-content of webpage ;)';


container.appendChild(content);

// After the JavaScript code is run, our DOM tree will change.\

// Keep in mind that the JavaScript does not alter your HTML, 
// but the DOM - your HTML file will look the same, 
// but the JavaScript changes what the browser renders.








/////////////////////// ADDING SOME HTML ELEMENT FROM JS ///////////////

const red = document.createElement('p');
red.classList.add('red');
red.textContent = `Hey, I'm red`;
container.appendChild(red);
red.style.color = 'red';


const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = `I'm blue h3`;
container.appendChild(blue);
blue.style.color = 'blue';


const body = document.querySelector('body');

const black = document.createElement('div');
black.classList.add('black');
black.textContent = `I'm black with pink background`;
black.style.backgroundColor = 'pink';
black.style.border = '1px solid black';
body.appendChild(black);

const inner = document.createElement('div');
inner.textContent = `I'm in a div`;
inner.classList.add(`inner`);
black.appendChild(inner);

