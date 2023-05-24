const personFactory = (name, age) => {
    const sayHello = () => console.log(`Hello, ${name}`);
    return {name, age, sayHello};

    // this also another way to return an object 
    return {name: name, age: age, sayHello: sayHello};
};


const mohamed = personFactory('Mohamed', 22);

console.log(mohamed.age);       // 22
mohamed.sayHello();             // Hello, Mohamed


const name = 'Abdelrahman';
const color = 'red';
const number = 34;
const food = 'fish';


// If we wrap values in cruly braces, we'll see the output as a key: value pairs
// as an object.

console.log({name, color, number, food});
// name: 'Abdelrahman', color: 'red', number: 34, food: 'rice'

// ========================================================================================

const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
};
// In the above fucntion, capitalizeString is a PRIVATE function
// and printString is a PUBLIC function.
printString();                    // Error, in an unaccessed scope

capitalizeString();               // Error, in an unaccessed scope

taco.capitalizeString();          // Error, We can't access variables declared in a function

const taco = FactoryFunction('taco');



taco.printString();               // Here, we are able to access printString()
// As the function 'FactoryFunction' returns printString function 

// NOTE:
/*
    In the first exmaple: name, age, sayHello all are returned from function 
    'PersonFactory' ==> so all of them are accessable.
*/

// ========================================================================================
const counterCreator = () => {
    console.log("test");    // This will be printed once, As function called once in line 65
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
};

const counter = counterCreator();   // this has access to variable count
                                    // and return 

counter();      // those has just access to return, so they just increment          
counter();      // not reinitialize
counter();
counter();

// ===========================================================================

const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;

    const die = () => {
        // nothing.
    };
    
    const damage = x => {
        health -= x;
        if(health <= 0) {
            die();
        }
    };
    
    const attack = enemy => {
        if(level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        };
        return {attack, damage, getLevel, getName};
    };
}


const jimmie = Player('jim', 10);
const badGuy = Player('jiff', 5);
jimmie.attack(badGuy);

// =================================================================================

const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
}
  
const Nerd = (name) => {
    const {sayName} = Person(name);     // create function sayName to store the Person object
    const doSomethingNerdy = () => console.log('nerd stuff');
    return {sayName, doSomethingNerdy};
}
  
const jeff = Nerd('jeff');
jeff.sayName();               // my name is jeff
jeff.doSomethingNerdy();      // nerd stuff

// ========================== USING Object.assign =========================

const Nerd2 = (name) => {
    const prototype = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return Object.assign({}, prototype, {doSomethingNerdy});
}

const jeff2 = Nerd2('jeff');
jeff2.sayName();                // my name is jeff
jeff2.doSomethingNerdy();       // do stuff



// ================================== Object.assign() ================================== //

/* 
    The Object.assign() static method copies all enumerable own properties from one or more 
    source objects to a target object.
    It returns the modified target object.
*/

// Syntax: 
//      Object.assign(target, ...sources);

// target:  The target object — what to apply the sources' properties to, which is returned after it is modified.
// sources: The source object(s) — objects containing the properties you want to apply.


const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const retrunedTarget = Object.assign(target, source);

console.log(target);    // {a: 1, b: 4, c: 5}

console.log(retrunedTarget === target);     // true


// =================== Cloning an Object ======================== //
const obj = {a: 1};
const copy = Object.assign({}, obj);    
console.log(copy);                      // {a: 1}



const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2);      // {a: 0, b: {c: 0}}

obj1.a = 1;
console.log(obj1);      //  {a: 1, b: {c: 0}}
console.log(obj2);      //  {a: 0, b: {c: 0}}


obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1);  // {a: 1, b: {c: 3}}
console.log(obj2);  // {a: 2, b: {c: 3}}

obj1.b.c = 10;          // changes obj1 & obj2
console.log(obj1);
console.log(obj2);

obj2.b = {c: 1004};     // changes only obj2
console.log(obj1);
console.log(obj2);

// For deep cloning, we need to use alternatives, because Object.assign() copies property values.
// ========================== Deep Clone =========================== //

const obj3 = {a: 0, b: {c: 0}};
const obj4 = JSON.parse(Json.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4);      // {a: 0, b: {c: 0}}



// ========================== Merging Objects ======================= //

const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3};

const objj = Object.assign(o1, o2, o3);
console.log(objj);       // {a: 1, b: 2, c: 3}
console.log(o1);         // {a: 1, b: 2, c: 3}    ===> target object itself is changed.


// ========================= Merging Objects with same properties ================ //

const oo1 = { a: 1, b: 1, c: 1 };
const oo2 = { b: 2, c: 2 };
const oo3 = { c: 3 };

const oobbjj = Object.assign({}, o1, o2, o3);
console.log(oobbjj);        // {a: 1, b: 2, c: 3}
/* 
    The properties are overwritten by other objects that have the same properties later in the parameters order.
*/

