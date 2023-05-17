let x = {}

// Every object in JS has an internal property called [[Prototype]]
/*
    The double square brackets that enclose [[Prototype]] signify that it is an internal property,
    and cannot be accessed directly in code.
*/

// To fin [[Prototype]] of this newly created object, 
// We will use the getPrototypeOf() method

console.log(Object.getPrototypeOf(x));
// The output will consist of several built-in properties and methods.

// ============== Prototype Inheritance =================== //
/*
    When we try to access property or method of an object, JavaScript will first
    first search on the object itself.
    If it's not found, it will search the object's [[Prototype]]
    if still no found
    JavaScript will check the prototype of the linked object, 
    and continue searching until the end of the prototype chain is reached.
*/

console.log(Object.toString())  
console.log(x.toString());              // object Object
console.log(x.__proto__.__proto__);     // null
// There is no second parent to x ==> the top parent is one level above.


let y = []      // array

// So, y has access to all Array.prototype methods.
// y in this case has the following chain
//  y ---> Array ---> Object

console.log(y.__proto__);               // constructor ...
console.log(y.__proto__.__proto__);     // consturctor ...

console.log(y.__proto__ === Array.prototype)                // true
console.log(y.__proto__.__proto__ === Object.prototype)     // true


/*
    We can use the instanceof operator to test whether the prototype property of a constructor 
    appears anywhere within an object’s prototype chain.
*/
console.log(y instanceof Array);        // true
console.log(y instanceof Object);       // true







// ============================ Constructor Functions ===================== //

function Hero(name, level) {
    this.name = name;
    this.level = level;
    this.toString = function() {
        return ("name: " + this.name + " has level of: " + this.level);
    }
}

/*
    We have created a constructor function called Hero with two parameters: name and level. 
    Since every character will have a name and a level, it makes sense for each new character 
    to have these properties. 
    The this keyword will refer to the new instance that is created, 
    so setting this.name to the name parameter ensures the new object will have a name property set.
*/

// Now, we can create a new instance with new.


let hero1 = new Hero('Bjohn', 1);
console.log(hero1.toString());
console.log(hero1);         // Hero {name: 'Bjohn', 'level': 1}
console.log(typeof hero1);  // object

console.log(Object.getPrototypeOf(hero1));      // constructor: f Hero(name, level)


// We can add a method to Hero using prototype. We'll create a greet() method
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

console.log(hero1.greet());         'Bjohn says hello.'




// Now, we want to create character classes for the heros to use.

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
    // chain constructor with call
    Hero.call(this, name, level);

    // add a new property
    this.weapon = weapon;
}


// Initialize Healer constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

// both new constructors now have the properties of Hero and a few unique one.


// We’ll add the attack() method to Warrior, and the heal() method to Healer.
Warrior.prototype.attack = function() {
    return `${this.name} attacks withs the ${this.weapon}.`;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}.`;
}


// At this point, we’ll create our characters with the two new character classes available.

const heroOne = new Warrior('Bjorn', 1, 'axe');
const heroTwo = new Healer('Kanin', 1, 'cure');

//hero1 is now recognized as a Warrior with the new properties.

console.log(heroOne);   // Warrior {name: 'Bjorn', level: 1, weapon: 'axe'}
console.log(heroTwo);   // Healer {name: 'Kanin', level: 1, spell: 'cure'}


console.log(heroOne.attack());
console.log(heroTwo.heal());

// console.log(heroOne.heal());        // Error: heal() is not defined as a function for heroOne
// console.log(heroTwo.attack());      // Error: attack() is not defined as a function for heroTwo



// console.log(heroOne.greet());       // Error as heroOne is of type Warrior & greet() is defined in Hero no Warrior

// To solve this problem, Set the prototype of warrior to the prototype of hero

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
console.log(heroOne.greet());       // Works well

// Now try to do the same thing to Healer i.e. heroTwo

// console.log(heroTwo.greet());       // the same ERROR :(

Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(heroTwo.greet());       // Works well :)






// EXAMPLE:

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
  
// This will return "John Doe":
console.log(person.fullName.call(person1));     // John Doe
/* 
    The call() method is a predefined JavaScript method.
    It can be used to invoke (call) a method with an owner object as an argument (parameter)
*/