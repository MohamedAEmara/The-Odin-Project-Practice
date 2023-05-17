/* ================ RECAP ================ */

// Object Literal
const myObject = {
    property: 'Value!',
    otherProperty: 77,
    'obnoxious property': function () {
        // do stuff!
    },
};

// There is 2 ways to get info out of an object

//      1- dot notation
myObject.property; // 'Value!'

//      2- bracket notaion
myObject['obnoxious property']; // [function]

// NOTE:
// You can't use dot notation in case of there is more than one word
// in the property name (property name includes spaces)

/*
  myObject."obnoxious property"   // this is not allowed!!
*/

const variable = 'property';
console.log(myObject.variable); // undefined
console.log(myObject[variable]); // Value!
// this is the same as:
console.log(myObject.property);

const playerOneName = 'Tim';
const playerTwoName = 'Jenn';
const playerOneMarker = 'X';
const playerTwoMarker = 'O';

// Another way to represent each player is to group name and marker in one object

const playerOne = {
    name: 'Tim',
    marker: 'X',
};

const playerTwo = {
    name: 'Jenn',
    marker: 'O',
};

// But as we have just two players it's not a big deal
// But if we have more and more players like 100 players
// we have to create a constructor to build an object for each player

// Just like with objects created using the Object Literal method, you can add functions to the object:
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(name);
    };
}

// instaiate a new object

const player = new Player('Mohamed', 'X');
console.log(player.name); // Mohamed
console.log(player.marker); // X

const player1 = new Player('Omar', 'O');
const player2 = new Player('Ahmed', 'X');

player1.sayName();
player2.sayName();

// Example:

// book object with [title, author, pages, read]

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        if (isRead == true)
            console.log(
                `${this.name} by ${this.author}, ${this.pages}, is read.`
            );
        else
            console.log(
                `${this.name} by ${this.author}, ${this.pages}, not read yet.`
            );
    };
}

const book1 = new Book('The Power of Habit', 'Charles Duhigg', 371, 1);
book1.info();
const book2 = new Book('Rich Dadd Poor Dad', 'Robert Kiyosaki', 336, 0);
book2.info();

const library = [book1, book2];

library.forEach((book) => {
    book.info();
});

// ======================== Prototypes ===================== //
/*
    1- All objects in Javascript have a prototype
    2- The prototype is another object that the original object inherits from and has access
       to all of tis prototyp's methods and properties.    
*/

console.log(Object.getPrototypeOf(player1) === Player.prototype); // true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // true

console.log(Object.getPrototypeOf(player1));
/* 
    this function returns an object constructor 
    i.e. Player(name, marker)

    The value of the Object Constructor's .prototype property contains prototype object.

*/

Player.prototype.sayHello = function () {
    console.log("Hello, I'm a player");
};

// Here, we defined the .sayHello function ‘on’ the Player.prototype object.
// It then became available for the player1 and the player2 objects to use!
/* 
    Similarly, you can attach other properties or functions you want to 
    use on all Player objects by defining them on the objects’ prototype (Player.prototype).
*/

player1.sayHello();
player2.sayHello();

// ================= What use is an object's prototype? ================= //

/* 
    1-  We can define properties and functions common along all objects on the prototype.
        to save memory. As defining every property and function takes up a lot of memory.
        Defining them on a centralized, shared object which the objects have access to, thus saves memory.

    
    2-  The Other reason is Inheritance 
    
*/

Object.getPrototypeOf(Player.prototype) === Object.prototype; // true
console.log(player1.valueOf()); // Output: Object { name: "Omar", marker: "X", sayName: false }

// How can we use .valueof() function although we didn't declare it above.
// The reason is that Player object inhertits prototype object and prototype object
// has valueOf method of Object . This method is meant to be overridden
// by derived objects for custom type conversion logic.

// How do we know that this .valueOf function is defined on Object.prototype?
// We make use of another function called .hasOwnProperty:

console.log(Object.prototype.hasOwnProperty('valueOf')); // true
console.log(player1.hasOwnProperty('valueOf')); // false

// What about hasOwnProperty ?
console.log(player1.hasOwnProperty('hasOwnProperty')); // false
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}!`);
};

function Playerr(name, marker) {
    this.name = name;
    this.marker = marker;
}

Playerr.prototype.getMarker = function () {
    console.log(`My marker is '${this.marker}'`);
};

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Playerr.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Playerr.prototype, Person.prototype);
Object.getPrototypeOf(Playerr.prototype); // returns Person.prototype

/*
    Object.setPrototypeOf(a, b);
    this function takes two arguments; the first one is the one which inherits 
    and second one is the one which you want the first argument to inherit from.

*/

// ================================== WARNING !!! ===========================  //

Player.prototype = Person.prototype;
/* 
    it will set Player.prototype to directly refer to Person.prototype (not a copy)
*/

const player_1 = new Playerr('steve', 'X');
const player_2 = new Playerr('also steve', 'O');

player_1.sayName(); // Hello, I'm steve!
player_2.sayName(); // Hello, I'm also steve!

player_1.getMarker(); // My marker is 'X'
player_2.getMarker(); // My marker is 'O'


// See this example:

function Personnnn(name) {
    this.name = name;
}

Personnnn.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}`);
}

function Playerrrr(name, marker) {
    this.name = name;
    this.marker = marker;
}

// Remember this not a good way of inheritance.
// Use Object.setPrototypeOf(Enemy.prototype, Person.prototype) instead.
Playerrrr.prototype = Personnnn.prototype;

function Enemy(name) {
    this.name = name;
    this.marker = '^';
}

Enemy.prototype = Personnnn.prototype;
// not Enemy.prototype & Personnnn.prototype & Playerrrr.prototype  All refer to the same thing
// and any change in any of them will change the other objects.

Enemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
}

const carl = new Playerrrr('carl', 'X');
carl.sayName();

