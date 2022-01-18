// class Polygon {
//     constructor(){
//         this.name = 'Polygon';
//     }
// }

// const poly1 = new Polygon();

// console.log(poly1.name)

//examples

class Person {
    constructor(name){
        this.name = name; 
    }

    introduce(){
        console.log(`hello, my name is ${this.name}`);
    }
}

const adxell = new Person('Adxell')

adxell.introduce();


//if your class is derived class, the default constructor calls the parent constructor, passing along any arguments that were provided 

// constructor(...args){
//     super(...args)
// }

class ValidationError extends Error{
    printCustomerMessage(){
        return `Validation failed (details: ${this.message})`
    }
}

try{
        throw new ValidationError("Not a valid phone number");
}catch(error){
    if(error instanceof ValidationError){
        console.log(error.name);
        console.log(error.printCustomerMessage());
    }else{
        console.log("Unknown error", error);
        throw error;
    }
}

//Another Examples 
// class Square extends Polygon {
//   constructor(length) {
//     // Here, it calls the parent class' constructor with lengths
//     // provided for the Polygon's width and height
//     super(length, length);
//     // NOTE: In derived classes, `super()` must be called before you
//     // can use `this`. Leaving this out will cause a ReferenceError.
//     this.name = 'Square';
//   }

//   get area() {
//     return this.height * this.width;
//   }

//   set area(value) {
//     this.height = value**0.5;
//     this.width = value**0.5;
//   }
// }

class Polygon{
    constructor(){
        this.name = "Adxell";
    }
}

class Square extends Polygon {
  constructor(name) {
    super(name);
  }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype);
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype);

let newInstance = new Square();

console.log(newInstance)


