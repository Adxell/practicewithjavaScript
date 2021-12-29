// const array = [45,65,76,87,99];
// //let index=4;
// let index=-2;
// if(array.at(index)==undefined){
//     console.log("Please enter valid number")
// }else{
//     console.log(`Using an index of ${index} the item returned is ${array.at(index)}`)
// }
//with funtion 

// const cart =["holo","apple", "banana", "pear"];

// function returnLast(array){
//     return array.at(-1);
// }
// function returnFirst(array){
//     return array.at(0);
// }

// const resultTheLastItem= returnLast(cart);
// console.log(resultTheLastItem);

// const resultTheFirstItem = returnFirst(cart);
// console.log(resultTheFirstItem);

//Comparing methods

const colors=["red", "green", "blue"];

const lengthWay = colors[colors.length-1];
console.log(lengthWay)

const sliceWay = colors.slice(-1)
console.log(sliceWay[0])

const atWay= colors.at(-1);
console.log(atWay)

