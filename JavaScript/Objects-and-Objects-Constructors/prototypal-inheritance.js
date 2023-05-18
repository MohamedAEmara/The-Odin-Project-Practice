let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;
// Now, all properties of animals will also be of rabbit.

console.log(rabbit.eats);       // true
console.log(rabbit.jumps);      // true

let animal2 = {
    eats: true, 
    walk() {
        console.log("Animal Walk");
    }
};

let rabbit2 = {
    jumps: true,
    __proto__ : animal2
};

let longEar = {
    earLength: 10,
    __proto__ : rabbit2
};


longEar.walk();                 // Animal Walk
console.log(longEar.jumps);     // true

// Now if we read something from longEar and it's missing, JS will look for it in rabbit,
// and then, in animal



let animal3 = {
    eats3: true,
    walk3() {
      /* this method won't be used by rabbit */
    }
};
  
let rabbit3 = {
    __proto__: animal3
};
  
rabbit3.walk3 = function() {
    console.log("Rabbit! Bounce-bounce!");
};
  
rabbit3.walk3(); // Rabbit! Bounce-bounce!





let user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};


let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);        // John Smith

admin.fullName = "Alice Cooper";    

console.log(admin.fullName);        // Alice Cooper
console.log(user.fullName);         // John Smith



let animal4 = {
    walk4() {
        if (!this.isSleeping4) {
            alert(`I walk`);
        }
    },
    sleep4() {
        this.isSleeping4 = true;
    }
};
  
let rabbit4 = {
    name: "White Rabbit",
    __proto__: animal4
};
  
// modifies rabbit.isSleeping
rabbit4.sleep4();
  
console.log(rabbit4.isSleeping4); // true
console.log(animal4.isSleeping4); // undefined (no such property in the prototype)




console.log('------------------------------------------');

// ===================== For in Loop ====================== //
// The for..in loop iterates over inherited properties too.

let _aminal = {
    eats: true
};

let _rabbit = {
    jumps: true, 
    __proto__: _aminal
};

// .keys return just the own properties not inherited.
console.log(Object.keys(_rabbit));  // jumps

for(prop in _rabbit)
    console.log(prop);      // [jumps, eats]




console.log('------------------------------------------');

// Now we can filter out inherited properties as follows:

for(let prop in _rabbit) {
    let isOwn = _rabbit.hasOwnProperty(prop);

    if(isOwn) {
        console.log(`Our: ${prop}`);         // Owr: jumps;
    } else {   
        console.log(`Inherited: ${prop}`);   // inherited: eats
    }
}

// Note
/*
    Where is the method rabbit.hasOwnProperty coming from?
    Looking at the cahin, the method is provided in "Object.prototype.hasOwnProperty"
    in other words, it's inherited.

    But, it didn't appear in for..in loop like eats and jumps
        As it's not enumerable. Just like all other properties of Object.prototype, 
        it has enumerable: false flag, 
        and for.. in only listts enumerable properties.


    Almost all other key/value-getting methods, 
    such as Object.keys, Object.values and so on ignore inherited properties.

*/



// Code before modification..

/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
*/


let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);      // This line will search for property stomach[] to push food in ti
    }                               // if there's no such property in speedy and lazy
};                                  // it'll use the one of hamster so feeding one will be feeding 
  
let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};
  
// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple
  
// This one also has it, why? fix please.
alert( lazy.stomach ); // apple