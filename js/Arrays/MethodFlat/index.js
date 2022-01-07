//Method flat(depth)
const arr1 =[0, 1, 2, [3,4]];

console.log(arr1.flat());


const arr2 = [0, 1, 2, [[[3,4]]]];

console.log(arr2.flat(1))

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity))

// Flattening and array holes 

const arr5 = [1, 2,,4,5];
console.log(arr5.flat());