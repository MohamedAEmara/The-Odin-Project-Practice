// ============================== For of loop ================================ //

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
    console.log(cat);
}

// This is similar to:
for (let i=0; i<cats.length; i++){
    console.log(cats[i]);
}

// ================================= maps() & filter() ========================= //

// You can use map() to do something to each item in a collection 
// and create a new collection containing the changed items:

function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// Here we pass a function into cats.map(), and map() calls the function once for each item in the array,
// passing in the item. It then adds the return value from each function call to a new array,
// and finally returns the new array. In this case the function we provide converts the item to uppercase,
// so the resulting array contains all our cats in uppercase:
  


// ======================================== filter() ================================//

// You can use filter() to test each item in a collection, 
// and create a new collection containing only items that match:

function lCat(cat) {
    return cat.startsWith('L');
}

const filterd = cats.filter(lCat);
console.log(filterd);       // [ "Leopard", "Lion" ]


