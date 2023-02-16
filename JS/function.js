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
