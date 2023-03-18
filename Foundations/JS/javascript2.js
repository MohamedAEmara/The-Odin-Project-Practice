console.log(9007199254740991);
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);
console.log(9007199254740991 + 5);
console.log(9007199254740991 + 10);



// TO represent a BigInt number (larger than 2^53-1)
// type n at the end of the number 
const bigInt = 1234567890123456789012345678901234567890n;
alert(bigInt);


// We can ebmed a variable in a string by using Backticks ` 
// like this:
// ` ` --> they allow us to embed variables and expressions into a string by wrapping them in ${}

let name = "Mohamed";
let phrase = `Hello, ${name}`;
alert(phrase);

// here, ${name} is just a text 
let phrase2 = 'Hello, ${name}';


// Another example: 

let phrase3 = `the sum of 1 + 2 is ${1 + 2}`;
alert(phrase3);




// ------------------- Boolean ----------------------- //
let isGreater = 4 > 1;            // isGreater = true
alert(isGreater);        


// Undefined value

let undefinedVariable;
alert(undefinedVariable);        // undefined --> means the variale declared by has no value yet.



// typeof 

alert(typeof 1);                 // number
alert(typeof 3n);                // bigint
alert(typeof null);              // object
alert(typeof "id");              // string
alert(typeof Symbol(33));        // symbol
alert(typeof Math)               // object
alert(typeof alert)              // function


// const button = document.querySelector("button");

// function greet() {
//     const name = prompt("What is your name?");
//     alert(`Hello, ${name}. Have a nice day!`);
// }

// button.addEventListener("click", greet);

let string = "Hi, there. Hi, there.";
// replace --> by default replaces just the first occurence of the word 
let newString = string.replace("Hi", "Hello");  // Hello, there. Hi, there. 

// If we want to replace all occurences of the word ---> use /g
let removeAllOccurences = string.replace(/Hi/g, "Hello");
alert(newString); 
alert(removeAllOccurences);

// Note that the original string --> doesn't changes 
alert(string);

// or use replaceAll() function
let replaceAllString = string.replaceAll("Hi", "Hello");
alert(replaceAllString);



// ====================== UpperCase & LowerCase ======================= //
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower 


// =========================== Concatenate =========================== //
let textOne = "Hello";
let textTwo = "World";
let textThree = textOne.concat(" ", textTwo);  // Concatenates the string to a list of string 
alert(textThree);


// =============================== trim ============================= //
// The trim() method removes whitespace from both sides of a string       

let textA = "      Hello World!      ";
let textB = textA.trim();


// trimStart() & trimEnd() ---> to trim the string from only one side.
