// const array1=['a', 'b','c'];
// const iterator=array1.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
const array = ['a','b','c','d'];

// for (let [index, element] of array.entries()){
//     console.log(`index = ${index}, element = ${element}`)
// }

let iterator = array.entries();

for (let element of iterator){
    console.log(element[1])
}

