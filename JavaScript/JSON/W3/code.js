const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

// ===================== Stringfy ===================== //

const text = ["Ford", "BMW", "Audi", "Fiat"];
const str = JSON.stringify(text);
const myArr = JSON.parse(str);

console.log(obj);
console.log(myArr);

console.log(obj.name);      // Jon
console.log(obj.age);       // 30


