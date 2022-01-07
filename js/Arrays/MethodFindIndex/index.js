 const array1=[5,12,8,130,44];

 const isLargerNumber = (element) => element > 13;

 console.log(array1.findIndex(isLargerNumber));

 //find the index of a prime in array 

 function isPrime(num){
     for(let i=2; num > i; i++){
         if(num % i == 0){
             return false;
         }
     }

     return num > 1; 
 }

 console.log([4,6,8,9,12].findIndex(isPrime));
 console.log([4,6,7,9,12].findIndex(isPrime));


//find index with arrow function

const fruits = ["apple ", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "cantaloupe");

console.log(index)
console.log(fruits[index])
