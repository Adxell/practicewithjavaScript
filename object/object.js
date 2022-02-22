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