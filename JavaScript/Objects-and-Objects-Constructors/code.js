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

const player_one = new Player('Omar', 'O');
const player_two = new Player('Ahmed', 'X');

player_one.sayName();
player_two.sayName();

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
