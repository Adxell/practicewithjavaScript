const array = new Array(["1","2","3"]);
let newArray=[1,12,3,4,5,5,6];
console.log((Array[Symbol.species] = newArray));
console.log(newArray)