
  

alert('ok')

function random(number) {
    return Math.floor(Math.random() * number);
}


for(let i=0; i<10; i++) {
    alert(random(100));
}



// When the user presses a key, the browser will call the function you provided, 
// and will pass it a parameter containing information about this event, 
// including the particular key that the user pressed:


function logKey(event) {scores
    console.log('You pressed ' + event.key + '.');
}


textbox.addEventListener('keydown', logKey);



// Instead of defining a separate logkey() function, you can pass an anonymous function into addEventListener
// Like this:

textbox.addEventListener('keydown', function(event) {
    console.log(`You pressed ${event.key}.`);
});


// ================================= Arrow Function: ============================= //
// If we pass an anonymous function like this, there's an alternative form we can use.
// Instead of function(event) .... you write (event) =>\
textbox.addEventListener('keydown', (event) => console.log(`You pressed ${event.key}.`));

// If the function only takes one parameter, you can also omit the brackets around the parameter:
textbox.addEventListener('keydown', event => console.log(`You pressed ${event.key}.`));

// Finally, if your function needs to return a value, and contains only one line, you can also omit the return statement. 
// In the following example we're using the map() method of Array to double every value in the original array:
const original = [1, 2, 3];
const doubled  = original.map(item => item*2);

for(let i = 0; i < doubled.length; i++)
    alert("doubled[" + i + "] = " + doubled[i]);
//The map() method takes each item in the array in turn, passing it into the given function. 
// It then takes the value returned by that function and adds it to a new array.


// So, this map is equivalent to:
function doubledItem(item) {
    return item * 2;
}



// There is another syntax for creating a function that is called a Function Expression.
// It allows us to create a new function in the middle of any expression.

let sayHi = function() {
    alert('Hello');
};

sayHi();



function sayHello()            {
    alert( "Hello" );
}
  
alert( sayHello );  // shows the function code
// This line does not run the function becaues there is no parentheses after sayHello.




// Example:


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
  


// A shorter way to ask the same question 

ask2(
    "Do you agree?", 
    function(){alert("You agreed.");}, 
    function(){alert("You canceled the execution.");}
);




// ================================= Function expression VS Function declaration ================== //

// function declaration:
// function sum(a, b){
//     return a + b;
// }

// function expression:
let sum = function(a, b){
    return a + b;
};

alert(sum(4, 5));        // 9



// ======================================= Arrow Expression =========================== //
let doubled2 = n => n*2;
alert(doubled2(3));

let sayHello2 = () => alert('Hello!');
sayHello2();