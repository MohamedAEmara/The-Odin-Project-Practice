let user = {
    name: "Mohamed",
    age: 30
};


console.log(user.age);
console.log(user.name);
user.isAdmin = false;       // this adds a new field to the object

// To delete property, We can use 
delete user.isAdmin;

console.log(user.isAdmin);      // Undefiend

// We can also add a multi-word attribute "But must be quoted"

let user2 = {
    name: "Omar", 
    age: 25, 
    "like birds": true
};


console.log(user2["like birds"]);      // to access multi-word name attribute --> use square brackets
console.log(user2.name);

let key = "like birds";
user2[key] = false;         // changes the "like bird" attribute
console.log(user2["like birds"]);       // flase

// NOTE that the dot notation cannot be used in a similar way.

let user3 = {
    name : "John",
    age : 28
};

let n = "name";
console.log(user3.n);       // undefined
console.log(user3[n]);      // John


let fruit =  prompt('which fruit to buy?', "apple");
let bag = {
    [fruit]: 5
}

alert(bag.apple);       // 5 if fruit is apply
                        // undefined if any other fruit


// the above example will work the same as:
let fruit2 = prompt('which fruit to buy?', 'fruit');
let bag2 = {};

bag2[fruit] = 5;



let fruit3 = 'apple';
let bag3 = {
    [fruit3 + 'Computers']: 5
};

console.log(bag3['appleComputers']);            


// Use a blueprint function to make objects...

function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
};


let ahmed = makeUser('Ahmed', 20);
let noha = makeUser('Noha', 27);
console.log(ahmed.name + " has " + ahmed.age + " years old.");
console.log(noha.name + " has " + noha.age + " years old.");

// A shorthand to use "name: name" ===> name,
// Like this;

function makeUserSimplified(name, age) {
    return {
        name, 
        age
    };
};

let mostafa = makeUserSimplified('Mostafa', 18);
console.log(mostafa.name + " has " + mostafa.age + " years old.");

// An unnecessary note that we can use language reserved keywords as names for object properties.

let obj = {
    for: 1,
    let: 2, 
    return: 3
};

console.log(obj.for + " " + obj.let + ' ' + obj.return);        // 1  2  3

// In short, there are no limitations on property names. 
// They can be any strings or symbols (a special type for identifiers, to be covered later).

let obj2 = {
    0: 'test'
};

// console.log(obj2.0)      // Syntax Error
console.log(obj2['0']);     // test


// ======================= EXISTENCE TEST ============================ //

let userr = {

};
alert(userr.noSuchProperty === undefined)       // true means no such property

// There is a special operator for that:

alert('name' in userr);              // false means this property is not in that object
userr['name'] = 'Ali';
alert('name' in userr);             // true means 'name' property is in the object userr


// ================================= loop over object properties ================================== //

let userX = {
    name: 'John',
    age: 12
};

for(let i in userX) {
    console.log(i);             // name, 30     ==> names of properties
    console.log(user[i]);       // mohamed, age ==> values of properties
}