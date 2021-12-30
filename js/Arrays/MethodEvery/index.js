// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array = [1, 30, 39, 4, 10, 13];

// console.log(array.every(isBelowThreshold))

// function isBigEnough(element, index, array) {
//   return element >= 10;
// }

// if ([12, 50, 80, 130, 44].every(isBigEnough)) {
//     console.log("Array has numbers > 10");
// }
// console.log([12,50,8,130,44].every(isBigEnough));
// console.log([12, 54, 18, 130, 44].every(isBigEnough));

// function isSubset(array1, array2){
//     return array2.every(function(element){
//         return array1.includes(element);
//     })
// }

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));
//------with Arrow function-------------
// console.log([12,5,8,130,44].every( x => x >= 10));
// console.log([12,54,18,130,44].every( x => x >= 10));

// let arr =[1,2,3,4];
// arr.every((elem, index, arr) => {
//     arr[index + 1] -= 1;
//     console.log(`[${arr}][${index}]->${elem}`);
//     return elem<2;
// });

arr = [1, 2, 3];
const result =  arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// arr = [1, 2, 3, 4];
// const result = arr.every((elem, index, arr) => {
//   arr.pop();
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   return elem < 4;
// });
console.log(result)
