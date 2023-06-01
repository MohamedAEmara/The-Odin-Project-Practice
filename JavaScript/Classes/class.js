// Here how we define a Class in JS

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
    // NOTE:
    // No comma between class methods // 

}


// Here how we use a class (make an object)

let user = new User("Emara");
user.sayHi();       // Emara

console.log(typeof User);            // function


// ====== What constructor really does? ====== //
/*
    1- Creates function named User, that becomes the resuylf of the class declaration.
    2- Stores class methods, such as sayHi, in User.prototype
*/


console.log(typeof User);       // function

console.log(User === User.prototype.constructor);   // true

console.log(User.prototype.sayHi);      // the code of sayHi method
// NOTE: the code itself not the output result of the code.


// There are exactly two methods in the prototype:
console.log(Object.getOwnPropertyNames(User.prototype));    // [constructor, sayHi]


// Rewriting class in pure function:

function Userx(name) {
    this.name = name;
}

// a function prototype has "constructor" property by default.

// Add a method to prototype:
Userx.prototype.sayHi = function() {
    console.log(this.name);
}

let userx = new Userx('John');
userx.sayHi();          // John



// Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype"
// Classes always use strict. All code inside the class construct is automatically in strict mode.


class C1 {
    sayHi() {
        console.log("hi from c1");
    }
};

let obj1 = class C2 {
    sayHi() {
        console.log('hi from c2');
    }
};

console.log(C1);    // body of class C1
// console.log(C2);    // Error, C2 is not visible outside of the class



// ================ Getter & Setters ================ //

class USER {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}


let omar = new USER('Omar');
console.log(omar._name);     // Omar

omar = new USER("");        // Name is too short
console.log(omar._name)     // Undefined;

omar = new USER("hahaha");  // _name set successfully to "hahaha"
console.log(omar._name);    // haha



// ================== Computed Names ================== //

class usr {
    ['say' + 'Hi']() {
        console.log("Hello");
    }
}

new usr().sayHi();      // Hello



// ====== You can Assign values using more complex expressions and function calls ===== //

class USR {
    name = prompt("Name, please?", "Mohamed");
}

let uu = new USR();
alert(uu.name);



// Private fileds
// By default, all class fields are public, To create a private field we add a 
// prefix # to its name ass follows

class ClassWithPrivate {
    #privateMethod() {
        return("I'm invisible");
    }

    publicMethod() {
        console.log("I'm visible");
        console.log(this.#privateMethod());     // I'm invisible
    }
}

const cl = new ClassWithPrivate();
cl.publicMethod();


// ============================ Inheritance ============================= //

class Animal {
    constructor(name) {
        console.log("I'm the parent");
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }   
}

class dog extends Animal {
    constructor(name) {
        console.log("I'm the child");
        super(name);        // call the parent's constructor
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const d = new dog("Bob");
d.speak();              // Bob barks
console.log(d.name);    // Bob


// ================ Evaluation Order ===================== //







