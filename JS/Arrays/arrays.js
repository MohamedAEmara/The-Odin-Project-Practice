const arr2 = new Array(50, 60);     // creates an array with length = 2
alert("length: " + arr2.length);

const arr3 = new Array(10);         // creates an array with 10 elements;
alert("arr3 = " + arr3);            // all elements are undefined.



const arr = ["1", 2, 3, 4, 5];
let n = arr.length;
for(let i=0; i<n; i++)
{
    alert(arr[i]);
}

arr[10] = 'haha';   // increase the length of the array to 11 to be able to 
                    // access the [10] element.


alert(arr + " has " + arr.length + " elements");
const colors = [];
alert("length: " + colors.length);      // 0
colors[0] = 'Black';
colors[1] = 'White';
colors[2] = 'Orange';
alert('length: ' + colors.length);      // 3



const cars = new Array('Mercedes',   'Toyota',   'Honda');

// these two ways of initializing array are the same.

alert(cars);    // in javascript --> We can access the whole array by its name
// prints all array element separated by commas.

alert(typeof(colors));      // object
alert(typeof(colors[0]));   // string
alert(typeof(arr));         // object
alert(typeof(arr[0]));      // string
alert(typeof(arr[1]));      // number
// Arrays here can contain different data types ولا حول ولا قوة إلا بالله


const person = {firstName:"John", lastName:"Doe", age:46}; 


alert(person.firstName);    // John
alert(person.lastName);     // Doe
alert(person.age);          // 46


const numbers = [4, 5, 2, 3, '1'];
numbers.sort();                 // 1,2,3,4,5
alert(numbers);             
alert(typeof(numbers[0]));      // string 



// ====================== ForEach ======================= //
const   fruits = ['Banana', 'Orange', 'Mango', 'Apple'];

// Push to add an element to the array.
fruits.push('Lemon');
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits 

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("show-list").innerHTML = text;

function myFunction(value)
{
    text += "<li>" + value + "</li>";
}


