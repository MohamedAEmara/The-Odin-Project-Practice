// The JavaScript method toString() converts an array to 
// a string of (comma separated) array values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); 


// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you 
// can specify the separator:
document.getElementById("demo").innerHTML = fruits.join(" * ");

//  Banana * Orange * Apple * Mango




// push & pop --> to add an element to the array or remove the last element 
// from the array "Like Stack"


// ========================= shift ============================// 
// removes the first element and shifts all other elements one element to the left.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.shift();      // returns the value was shifted out "Banana"
console.log(fruits2);   // Orange, Apple, Mango


// ======================== unshift ===========================//
fruits2.unshift("Blackberry", "Kiwi");    // adds element(s) to the beginning of the 
console.log(fruits2);                     // array and shift all other elements to the right.


// ===================== Merging arrays together ============== // 
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);  // merge the 3 arrays together.



// ========================== Splicing and Slicing Arrays =============== //


// ==================================== Splice ========================== // 
// The splice() method --> adds new items to an array.
// The slice() method  --> slices out a piece of an array.


const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.splice(2, 0, "Lemon", "Kiwi"));    // returns an empty array --> as the elements to be deleted (second parameter) is zero.
console.log(fruit);                                  // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.



const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit1.splice(2, 2, "Lemon", "Kiwi"));       // ["Apple", "Mango"]   (deleted elements)
console.log(fruit1);                                     // ["Banana", "Orange", "Lemon", "Kiwi"]

//  you can use splice() to remove elements without leaving "holes" in the array: 
const fruitt = ["Banana", "Orange", "Apple", "Mango"];
fruitt.splice(0, 1);
// The first element was removed , no New element added


// ===================================== Slice ============================== //

// ==================== NOTE:

// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitss.slice(3);    // creates a new array "citrus" and add element from index 3 to it. 
console.log(citrus);                // ["Apple", "Mango"]

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.

const frui = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citru = frui.slice(1, 3);
console.log(citru);           // citru = ["Orange", "Lemon"]
cit = frui.slice(2, 5) // ===> 2, 3, 4, ==> cit = ["Lemon", "Apple", "Mango"];
console.log(cit);



// ============================ Automatic toString() ========================== //
/*
J   avaScript automatically converts an array to a comma separated string when a primitive value is expected.
    This is always the case when you try to output an array.
    These two examples will produce the same result:
*/

const fru = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fru.toString();