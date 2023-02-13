// let x = 1 + 5;
// let y = 2 ** 14;
// alert(y);

// let power = Math.pow(2, 14);
// alert(power);

// let num = 9999999999999999;
// alert(num);

// let num2 = 999999999999999999999;
// alert(num2)


let x = "10";
let y = 20;
let res = x + y;
alert("res = " + res);         // res = 1020


let x2 = 10;
let y2 = 20;
let res2 = x2 + y2;
alert(res2);                   // res2 = 30

let a = 10;
let b = 20;
let c = "30";
let ress = a + b + c;
alert(ress);                 // ress = 3030


// JS will try to convert string to numbers in numeric operations.

let num1 = "100";
let num2 = "200";
let division = num1 / num2;

alert(division);


// If it couldn't convert the operands into numeric values ---> The result will be NaN

let number1 = '12';
let number2 = 'ab';
let multiplication = number1 * number2;        // NaN

alert(multiplication);


// But in + operation on strings ---> it won't convert the operands into numeric values
// Just concatenate the operands.


let xx = NaN;
let yy = 4;
let resss = xx + yy;
alert(resss);

resss;

// NaN + (or any other operation) any numberic value --->  NaN
// but NaN + "34"  (string)  ---> NaN34 (concatenation)



// Infinity (or -Infinity) is the value JavaScript will return 
// if you calculate a number outside the largest possible number.


// Like division by zero ---> will result in infinity


let decimalPoint = 1.129456789;
let twoDecimalPlaces = decimalPoint.toFixed(2);  // round nuber to this decimal places
alert(decimalPoint);
alert(twoDecimalPlaces);


// to make the + operation on strings acts as an integers
// We have to cast the operands

let myNumber = "74";
myNumber = Number(myNumber) + 4;
alert(myNumber);


// Null equals zero when it's in an operation with other numeric operands 
alert(null + 9);

