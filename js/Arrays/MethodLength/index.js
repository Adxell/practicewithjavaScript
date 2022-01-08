const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length)
//conditional 
//var nameListA = new Array(4294967296)
//var nameListB = new Array(-100)
//this is a invalid array
// console.log(nameListA.length)
// console.log(nameListB.length)

// var nameListC = new Array();

// nameListC.length=Math.pow(2, 32)-1;

// console.log(nameListC.length)

// const arr = [1, 2];
// console.log(arr)
// arr.length = 5;
// console.log(arr) 
// arr.forEach(element => console.log(element))

//examples 
// let numbers = [1, 2, 3, 4, 5];
// let length = numbers.length;

// for (let i=0; i < length; i++){
//     numbers[i] *= 2;
// }

// console.log(numbers)

//shortening an array
let numbers = [1, 2, 3, 4, 5];

if(numbers.length > 3){
    numbers.length = 3;
}

console.log(numbers)
console.log(numbers.length)