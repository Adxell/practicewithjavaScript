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

//let o = new Object();
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

//undefined because the object book not has property subtitle
console.log(book.subtitle)

//typeError because book.subtitle is undefined and we cant compute this expression
//console.log(book.subtitle.length)

//Deleting properties 

//the deleting operator removes a property from an object. 

delete x;//in strict mode this is a error  
delete globalThis.x; //in stric mode this is works 


//Testing Properties 
//with IN operator
let o = { x: 1};

console.log("x" in o); 
console.log("y" in o);
console.log("toString" in o);

//with hasOwnProperty() method
// The hasOwnProperty() method of an object tests whether that
// object has an own property with the given name. It returns false for
// inherited properties:

console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));

//With propertyIsEnumerable() method 

console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("toString"));

console.log(Object.prototype.propertyIsEnumerable("toString"));

//With !== query 

console.log(o.x !== undefined);
console.log(o.y !== undefined);

//Enumerating properties 
let p = {x: 1, y: 2, z:3};

for(let o in p){
    console.log(o);
}

//To guard against enumerating inherited properties with for/in, you
//can add an explicit check inside the loop body:

for(let o in p){
    if(!p.hasOwnProperty(p)) continue;
}

//With object.keys() method return an array with the enumerable own properties
let save = Object.keys(p);
console.log(save);

//With Object.getOwnPropertyNames() return an array of the names of non-enumerable own properties as well

//With Object.getOwnPropertySymbols() retrun own properties whose names are Symbols, whether or not they are enumerable. 

//With Reflect.ownKeys() returns all own property names, both enumerable and non-enumerable, and both string and Symbol. 

//Property Enumeration Order 

//1. Object.keys()
//2. Object.getOwnPropertyNames()
//3. Object.getOwnPropertySymbols()
//4. Reflect.ownKeys()
//5. JSON.stringify()

//Extending Objects

let target = {x: 1}, source = {y: 2, z: 3};

for(let key of Object.keys(source)){
    target[key]= source[key];
}

console.log(target)

function merge(target, ...sources){
    for(let source of sources){
        for(let key of Object.keys(source)){
            if(!(key in target)){
                target[key] = source[key];
            }
        }
    }
    return target; 
}
console.log(merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }));
console.log(Object.assign({x:1}, {x: 2, y:2}, {y: 3, z: 4})); 

console.clear();
//Serializing Objects 

let i = {x: 1, y: {z: [false, null, ""]}};

let s = JSON.stringify(i);
console.log(s)

let q = JSON.parse(s); 
console.log(q)

//Object Methods 

//toString()

let j = {x: 1, y: 1}.toString();
console.log(j)

//my own method toString()

let point2 ={
    x: 1, 
    y: 2, 
    toString: function(){return `(${this.x}, ${this.y})`;}
}
console.log(String(point2));

//toLocaleString()

let point3 = {
    x: 1000, 
    y: 2000, 
    toString: function(){return `(${this.x}, ${this.y})`;
}, toLocaleString: function(){
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`
}
}; 

//diference between toStrign and toLocaleString

console.log(point3.toString());
console.log(point3.toLocaleString()); 

//valueOf()

let point4 = {
    x: 3, 
    y: 4, 
    valueOf: function(){return Math.hypot(this.x, this.y);}
};

Number(point4);

console.log(point4>4)

//the toJSON()

let point5 = {
    x: 1, 
    y: 2, 
    toString: function(){return `(${this.x}, ${this.y})`;
}, toJSON: function(){ return this.toString();}
};

console.log(JSON.stringify([point5]))

//computed property names 

const PORPERTY_NAME = "p1"; 
function computePropertyName() {return "p"+2; }
let h = {}; 
h[PORPERTY_NAME] = 1; 
h[computePropertyName()] = 2; 

console.log(h)

//with ES6

let e = {
    [PORPERTY_NAME]: 1, 
    [computePropertyName()]: 2
}; 

console.log(e)




