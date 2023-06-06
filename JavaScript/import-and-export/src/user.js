class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function printName(user) {
    console.log(`User's name is ${user.name}`);
}

function printAge(user) {
    console.log(`User is ${parseInt(user.age)} years old.`);
}



export default User;
export { printAge, printName };
