// It is possible that at the same time:

//  -Two values are equal.
//  -One of them is true as a boolean and the other one is false as a boolean.



// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!



// Note that 0 is equal to false when using == operator to check
// And the same thing happens with empty string.

alert(0 == false);          // true
alert('' == false);         // true


// But when using === operator to check ---> they're not the same
alert('' === false);     // false
alert(0 === false);      // false
// A strict equality operator === checks the equality without type conversion.



alert(null == undefined);       // true
alert(null === undefined)       // false

alert("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

// انتو كالتو دماغ أمي يا بتوع الجافاسكريبت
//  null  VS  0

alert(null > 0);            // false
alert(null == 0);           // false
alert(null >= 0);           // true
alert(null <= 0);           // true


// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. 
// That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, 
// without any conversions, they equal each other and don’t equal anything else. 
// That’s why (2) null == 0 is false.



// note that null only equals undefined and nothing else 

null == "\n0\n";        // false
null === "\n0\n";       // false




// -->  OR || operator is use to get the first truthy value from a list of variables or expressions

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
alert( firstName || lastName || "Anonymous" || nickName); // Anonymous



// on contrast --> && logical and find the first falsy value
alert( 1 && 2 && null && 3 );   // null
alert( 1 && 2 && 3 );           // 3, the last one

// Sometimes a double not is used to convert a value to boolean type.
alert(!!(1 && 2 && 3));         // true



alert( alert(1) || 2 || alert(3) );         
// returns 1 ---> then returns 2


// The call to alert does not return a value. Or, in other words, it returns undefined.
// The first OR || evaluates its left operand alert(1). That shows the first message with 1.
// The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
// There will be no 3, because the evaluation does not reach alert(3).


alert( alert(1) && alert(2) );     
// returns 1 ---> then undefined 



alert( null || 2 && 3 || 4 );       // 3
// The precedence of AND && is higher than ||, so it executes first.
// The result of 2 && 3 = 3, so the expression becomes:
// null || 3 || 4




// ============================ prompt =============================== // 
let age = prompt('How old are you', '20');  // the pop-up message will ask you the previous question, and the default value will be 20
// If we don't change it, it will be 20.