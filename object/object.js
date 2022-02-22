//making objects literals 

let empty = {};

let point = {x : 0, y : 0}; //Two numeric properties 

let p2 = {x: point.x, y: point.y+1};

let book = {
    "main title": "JavaScript", 

    "sub-title": "The Definitive Guide", 

    for: "all audences", 
    author:{
        firstname :"David", 
        surname: "Flanagan"
    }
};

console.log(book)

//creating objects with new 

let o = new Object();
let a = new Array(); 
let d = new Date();

let r = new Map();

//Object.create()

let o1 = Object.create({x: 1, y: 2});

console.log(o1.x)
//if i need create a new Object with the properties, is necesary pass Object.prototype 

let o3 = Object.create(Object.prototype);
console.log(o3)

//Querying and setting proterties 

let author = book.author; 

let name = author["surname"]; 
console.log(name)
let title = book["main title"];

