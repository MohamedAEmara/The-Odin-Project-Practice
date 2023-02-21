// The JavaScript method toString() converts an array to 
// a string of (comma separated) array values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); 


// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you 
// can specify the separator:
document.getElementById("demo").innerHTML = fruits.join(" * ");

//  Banana * Orange * Apple * Mango

