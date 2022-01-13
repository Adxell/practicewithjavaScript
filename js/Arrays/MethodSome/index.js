const array = [1, 2,3, 4,5]; 

const even = (element) => element % 2 === 0;

console.log(array.some(even))
//examples 
function isBiggerThan10( element, index , array){
    console.log(element)
    return element > 10;
}

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));

//arrow function
console.log([2, 5, 8, 1, 4].some(x => x > 10));
console.log([12, 5, 8, 1, 4].some(x => x > 10));

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val){
    console.log(arr)
    return arr.some(function(arrVal){
        console.log(arrVal)
        return val === arrVal
    })
}

checkAvailability(fruits, 'kela')


//Converting any value to Boolean 

const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value){
    'use strict'; 

    if(typeof value === 'string'){
        value = value.toLowerCase().trim();
    }

    return TRUTHY_VALUES.some(function(t){
        return t === value;
    })
}

console.log(getBoolean(1))
