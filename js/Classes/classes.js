// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }

// console.log(Rectangle.name)

// let Rectangle1 = class Rectangle2 {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }

// console.log(Rectangle1.name)

//Prototype methods


class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width  = width;
    }

    get area(){
        return this.calcArea()
    }

    calcArea(){
        return this.height * this.width;
    }
}


const square = new Rectangle(10 , 10); 
console.log(square.calcArea());

//Generator methods

class Polygon {
    constructor(...sides){
        this.sides = sides;
    }
    //Method
    *getSides(){
        for(const side of this.sides){
            yield side;
        }
    }
}

const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]);

//Static methods and properties 

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point);
console.log(Point.distance(p1, p2))



// class Animal{
//     speak(){
//         return this; 
//     }

//     static eat(){
//         return this;
//     }
// }

// let obj = new Animal();
// obj.speak();
// console.log(obj.speak());
 
// let speak = obj.speak;
// speak();
// console.log(speak())

// Animal.eat();
// console.log(Animal.eat())
// let eat = Animal.eat;
// eat();

// function Animal (){
// }

// Animal.prototype.speak= function(){
//     return this;
// }

// Animal.eat= function(){
//     return this;
// }

// let obj = new Animal();
// let speak = obj.speak;
// speak();

// console.log(speak())

//instance properties 

class Rectangle3 {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}


//field declarations 

class Rectangle4 {
    height = 0; 
    width; 

    constructor(height, width){
        this.height = height; 
        this.width = width;
    }
}

//private field declarations 

class Rectangle5{
    #height = 0; 
    #width;
    constructor(height, width){
        this.#height = height;
        this.#width  = width;
    }
}

//Sub classing with extends


// class Animal {
//     constructor(name, color){
//         this.name = name; 
//         this.color = color; 
//     }

//     speak(){
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, color){
//         super(name, color); //Call the super class constructor and pass in the name parameter
//     }

//     speak(){
//         console.log(`${this.name} barks. \nwith color ${this.color}`);
//     }
// }

// let d = new Dog('Mitzie', 'green');
// d.speak();

const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

//If you do not do this you will get TypeError when you invoke speak 
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('mitzie');
d.speak();


//Species 

class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
}

let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x * x);
console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array)


//Super class calls with super 
class Cat {
    constructor(name){
        this.name = name;
    }
    //this method
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}


class Lion extends Cat {
    //method speak where does call to super class Cat and get method speak
    speak(){
        super.speak();
        console.log(`${this.name} roars.`);
    }
}

let l = new Lion('Fuzzy');
l.test()

//Mix-ins 
let calculatorMixin = Base => class extends Base{
    calc(){ }
};

let randomizerMixin = Base => class extends Base{
    randomize(){ }
}

class Foo { }
class BAr extends calculatorMixin(randomizerMixin(Foo)){ }

