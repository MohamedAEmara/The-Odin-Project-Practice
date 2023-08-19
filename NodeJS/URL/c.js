// ====================== new URLSearchParams(string) =============================== //
// Parse the string as a query, and use it to instantiate a new URLSearchParams object

let params;

params = new URLSearchParams('user=abc&query=xyz');
console.log(params.get('user'));      // abc
console.log(params.get('query'));     // xyz

params = new URLSearchParams('?user=abc&query=xyz');
console.log(params.toString());
console.log(params.get('user'));


const paramss = new URLSearchParams({
    user: 'abc',
    query: ['first', 'second'],
});

console.log(paramss.getAll('query'));       // [ 'first,second' ]
console.log(paramss.toString());            // user=abc&query=first%2Csecond
console.log(paramss.get('query'));          // first,second




// ===================== new URLSearchParams(iterable) ===========================//
let param;
param = new URLSearchParams([
    ['user', 'abc'],
    ['query', 'first'],
    ['query', 'second'],
]);
// here duplicate keys are allowed.
console.log(param.toString());  // user=abc&query=first&query=second

// Usin a Map Object...
const map = new Map();
map.set('user', 'abc');
map.set('query', 'xyz');
params = new URLSearchParams(map);
console.log(params.toString());     // user=abc&qurey=xyz


// Using Generator Function...
function* getQueryPairs() {
    yield ['user', 'abc'];          // Generates pair
    yield ['query', 'first'];
    yield ['query', 'second'];
};





