const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

//console.log(animals.slice(2));

//console.log(animals.slice(2, 4));
//console.log(animals.slice(1, 5));
//console.log(animals.slice(-2));
//console.log(animals.slice(2, -1));

//examples 
let fruits = ['banana', 'orange', 'lemon', 'apple', 'mango']; 
let citrus = fruits.slice(1, 3);

//console.log(citrus); 

//Using slice 

let myHonda = {color :'red', wheels: 4, engine: {cylinders:4, size: 2.2}};
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
let newCar = myCar.slice(0, 2)

console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

myHonda.color = 'purple'
console.log('The new color of my honda is ' + myHonda.color)
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)