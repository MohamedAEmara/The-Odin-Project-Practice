import myName from './myName';
import getPrimes from './getPrimes';

// import U, { printName, printAge } from './user.js';
// Note that we can change the name of imported class


// But, We can't change the name of the functions
// import U from './user.js';

// To be able to change them: 
// We use as to rename the functions
// As follows:
import U, {printAge as pa, printName as pn } from './user.js';



function component() {
    const element = document.createElement('div');
    const num = getPrimes(10);

    element.textContent = myName('Cody ') + num;
    return element;
}

console.log("hi");
// console.log(primes.length);
// console.log(primes);

document.body.appendChild(component());


const firstUser = new U('Mohamed', 22);

const line2 = document.createElement('div');
line2.textContent = firstUser.name + " has " + firstUser.age;

document.body.appendChild(line2);

const msg1 = pa(firstUser);     // Here, we called pa instead of printName.
const msg2 = pn(firstUser);

msg1, msg2;