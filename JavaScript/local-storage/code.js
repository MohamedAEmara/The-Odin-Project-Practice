let myObj = {
    name: "Mohamed",
    age: 22
};

let str = JSON.stringify(myObj);

// localStorage.setItem("myObj", myObj);
// console.log(localStorage);


localStorage.setItem("str", str);
console.log(str);
console.log(localStorage);


let myObjDeserialized = JSON.parse(localStorage.getItem("str"));
console.log(myObjDeserialized)