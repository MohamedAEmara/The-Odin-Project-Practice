import myName from './myName';
import getPrimes from './getPrimes';

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


