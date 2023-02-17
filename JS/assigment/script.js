function add7(number) {
    return number + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(string) {
    return string.toUpperCase();
}

function lastLetter(string) {
    return string.charAt(string.length - 1);
}

document.getElementById('output').innerHTML = add7(8);

document.getElementById('output').innerHTML = multiply(5, 6);

document.getElementById('output').innerHTML = capitalize('egypt');
document.getElementById('output').innerHTML = capitalize('Egypt');
document.getElementById('output').innerHTML = capitalize('MOHAMED');

document.getElementById('output').innerHTML = lastLetter('Mohamed');