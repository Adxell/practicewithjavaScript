// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter( word => word !=='present');
// console.log(result)

// function isBigEnough(value) {
//   return value >= 10;
// }
// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// console.log(filtered)

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


//filter invalid entries from JSON


// let arr= [
//   { id: 15},
//   { id: -1},
//   { id: 0},
//   { id: 3},
//   { id: 12.2},
//   { },
//   { id: null},
//   { id: NaN},
//   { id: 'undefined'},
// ]


// let invalidEntries = 0; 
// function filterByID(item){
//   if(Number.isFinite(item.id) && item.id!==0 && item.id % 1 == 0 && Math.sign(item.id) == 1){
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// let arrByID = arr.filter(filterByID);

// console.log(arrByID)

// console.log('Number of invalid Entries =', invalidEntries)

//Searching in array 
// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// const filter = function (arr, query){
//   return arr.filter(function(el){
//     return el.toLowerCase().indexOf(query.toLowerCase()) !==-1
//   })
// }
// let fruitss="";

// for(let i = 0; i<filter(fruits, "ap").length; i++){
//   fruitss += "<li>" + filter(fruits, "ap")[i] + "</li>";
//   console.log(filter(fruits, "ap")[i]);
// }
// document.getElementById("view").outerHTML=fruitss;
// console.log(fruitss)


// console.log(filter(fruits, "an"));


//Affecting innitial Array 

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

// const modifiedWords= words.filter((word, index, arr)=>{
//   console.log(arr[index+1]+=" extra");
//   return word.length<6;
// })
// console.log(modifiedWords)

// const appendedWords=words.filter((word, index, arr)=>{
//   arr.push('new');
//   return word.length < 6;
// })

// console.log(appendedWords)

//Deleting words

const deleteWords=words.filter((word, index, arr)=>{
  arr.pop();
  return word.length < 6;
})

console.log(deleteWords)