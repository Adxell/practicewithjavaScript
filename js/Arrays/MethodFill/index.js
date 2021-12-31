// const array1=[1,2,3,4];
// //fill with 0 from position 2 until position 4
// console.log(array1.fill(0,2,4));

// //fill with 5 from position 1
// console.log(array1.fill(5,1));

// //fill with 6 from position 0
// console.log(array1.fill(6));

// let tempGirls = Array(5).fill("girl", 0);
// console.log(tempGirls)

const arr = new Array(9);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(9).fill(Math.random(1,9)*10); // Creating an array of size 4 and filled of 1
}
console.log(arr)