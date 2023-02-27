const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
    // stop bubbling 
    // prints "three" in case of capture: false
    // and "one" in case of capture: true
}


// divs.forEach(div => div.addEventListener('click', logText));  
// If I click on the middle of the shape "three" --> then the click will be
// considered as on divs one, two, and three 


//document.body.addEventListener('click', logText);   // 'grand-parent' --> the name of the class of body.



// when click on the element it searches in the DOM till find the target element
// after that it exutes from bottom to top -> "From inner to outer"


divs.forEach(div => div.addEventListener('click', logText, {
    capture: true 
    // capture: false
    
}));

// capture: true ---> it means the function "logText" will not run in the way
// bottom up , but in the contract way
// by defualt it's --> capture: false




const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
   console.log('click');
   e.stopPropagation();
}, {
    once:true  
    // when clicking on button many times ---> it shows in console just once.
    // even if cliking on other elements ---> it clicks once.
})