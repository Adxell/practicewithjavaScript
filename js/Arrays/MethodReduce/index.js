// const array1 = [1, 2, 3, 4]; 

// const reducer = ( previousValue, currentValue, index) => { 
//     console.log(index)
//     return previousValue + (currentValue + index)
// };

// console.log(array1.reduce(reducer))

//example 
// const array = [15, 16, 17, 18, 19]; 

// function reducer(previous, current, index, array){
//     const returns = previous+current+index; 
//     console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//     return returns; 
// }

// array.reduce(reducer)

//flatten an array of arrays 

// let flattened = [[0,1], [2, 3], [4,5]].reduce(
//     function(previousValue, currentValue){
//         return previousValue.concat(currentValue);
//     },
//     []
// )

// console.log(flattened)

//counting instances of values in an object 

// let names = [
//   "Alice",
//   "bob",
//   "bob",
//   "bob",
//   "bob",
//   "bob",
//   "Tiff",
//   "Bruce",
//   "Alice",
// ]; 

// let countNames = names.reduce(function(allName, name){
//     console.log(allName)
//     if(name in allName){
//         allName[name]++
//     }else{
//         allName[name] = 1
//     }
//     return allName
// }, {})

// console.log(countNames)

//Grouping objects by a property 

// let people = [
//     {name: 'Alice', age : 21}, 
//     {name: 'Max', age: 20}, 
//     {name: 'Jane', age : 20},
// ]

// function groupBy(objectArray, property){
//     return objectArray.reduce(function(acc, obj){
//         let key = obj[property];
//         if(!acc[key]){ 
//             acc[key]=[]
//         }
//         acc[key].push(obj)
//         return acc
//     }, {})
// }

//let groupedPeople = groupBy(people, 'age');

//console.log(groupedPeople)

let friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

let allbooks = friends.reduce(function(previousValue, currentValue){
    return [...previousValue, ...currentValue.books];
}, ['Alphabet']);

console.log(allbooks)