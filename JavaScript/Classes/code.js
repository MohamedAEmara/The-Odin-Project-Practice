// ======================= Getters & Setters ========================= //

let user = {
    name: 'John',
    surname: 'Smith',

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
};

console.log(user.fullName);



let user2 = {
    name: 'Mohamed',
    surname: 'Emara'
};

Object.defineProperty(user2, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(' ');
    }
});

console.log(user2.fullName);

for(let key in user) 
    console.log(key);

// Setting used to handle the vlaues passed to the object
/* 
    For instance, if we want to forbid too short names for user, 
    we can have a setter name and keep the value in a separate property _name:
*/

let userr = {
    get name() {
        return this._name;
    },

    set name(value) {
        if(value.length < 4) {
            alert("name is too short");
            return;
        }
        this._name = value;
    }
}