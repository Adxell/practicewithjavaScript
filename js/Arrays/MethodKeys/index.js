// const array1 = ['a', 'b', 'c'];

// const iterator = array1.keys();


// for (let key of iterator){
//     console.log(key)
// }

let arr = ['a',,'c'];

let sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
//var denseKeys = [...arr.keys()];
console.log(denseKeys)
console.log(sparseKeys)