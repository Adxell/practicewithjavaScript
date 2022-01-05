//Method Find
//The find() method returns the value of the first element in the 
//provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.

// const array1=[5, 11, 13, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found)

//find an object in an array by one of its properties

// const inventory = [
//     {name:"apples", quantity: 2},
//     {name:"bananas", quantity: 0},
//     {name:"cherries", quantity: 5},
// ];

// function isCherries(fruit){
//     return fruit.name ==='cherries';
// }

// console.log(inventory.find(isCherries))

// const result = inventory.find(({name})=>name==='cherries');

// console.log(result)

//find a prime number in an array 

// function isPrime(element, index, array){
//     let start=2;

//     while (start <=Math.sqrt(element)){
//         if( element % start++ < 1){
//             return false;
//         }
//     }
//     return element > 1;
// }

// console.log([4,6,8,12].find(isPrime));
// console.log([4,5,6,8,12].find(isPrime));


const array= [0,1,,,,5,6];

// array.find(function(value, index, arr){
//     console.log('visited index', index, ' with value ', value)
// })

array.find(function(value, index){
    if(index === 0){
        console.log("Deleting array[5] with vale", array[5]);
        delete array[5];
    }
    console.log("visited index ", index , ' with value ', value);
})