// Events are actions that occur on webpage such as mouse-click or keypressed
// and using JavaScript we can make our webpage listen and react to these events.

// there are three primary ways 
// on[eventType]      -     onclick      -     onmousedown


// Method 1: 
    // embeded js in html file



// Method 2:
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello, there - Method 2');

// This is a little better. We’ve moved the JS out of the HTML and into a JS file, 
// but we still have the problem that a DOM element can only have 1 “onclick” property.




// Method 3:
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {alert('Button 3 is pressed!!');});





// We can also modify method one and separate js and html like this.

function alertFunction(){
    alert('You have just clicked the button');
}




btn.addEventListener('click', function(e){
    console.log(e.target);
});

/*
    The e in that function is an object that references the event itself. 
    Within that object you have access to many useful properties and functions 
    such as which mouse button or key was pressed, or information about the event’s target - 
    the DOM node that was clicked.
*/


// We can also add a style when onclick even is called.

btn.addEventListener('click', function(e){
    e.target.style.backgroundColor = 'cyan';
});


// ========================= Attaching Listeners to Groups of Nodes ================ //
/* 
    We learned above that we can get a nodelist of all of the items matching a specific selector 
    with querySelectorAll('selector'). In order to add a listener to each of them we simply 
    need to iterate through the whole list like so:
*/
 
// first --> some buttons added in events.html        "line 33"


// // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert("button " + button.id + " is pressed.");
    })
})


buttons.forEach((button) => {
    
    // when enter the mouse the area of the button --> change the background to gray
    button.addEventListener('mouseenter', () =>{
        button.style.backgroundColor = 'gray';
    })

    
    // when double click on the button ---> change background to white
    button.addEventListener('click', () => {
        button.style.backdropFilter = 'white';
    })
    
})