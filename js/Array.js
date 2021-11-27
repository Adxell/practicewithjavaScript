/*Array*/
/*Create Array*/

let fruits=['Fig','Mango','Plum', 'Banana']; 

console.log(fruits.length);
//4

let first = fruits[0];
console.log(first);
//fig

let last=fruits[fruits.length-1];

console.log(last);
//Banana

let vegetables=['Cabbage', 'Turnip', 'Radish', 'Carrot']; 
console.log(vegetables)
//show Array 

let pos =1 
let n = 2

let removeItems=vegetables.splice(pos, 2)

console.log(vegetables)
//vegetables ['Cabbage', 'Carrot']
console.log(removeItems)
//vegetables ['Turnip', 'Radish']

/*copy an array*/

let copyItems=vegetables.slice()

console.log(copyItems)


let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'


//console.log(arr.0) // a syntax error

console.log("---------------------------")

const fruits2=[]

fruits2.push('banana', 'apple', 'peach')
console.log(fruits2.length)

fruits2[5]='mango'
console.log(fruits2[5])
console.log(Object.keys(fruits2))
console.log(fruits2.length)

fruits2.length=10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined

//Decreasing the length property does, however, delete elements.
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2

//example 

let msgArray =[]

msgArray[0]='hello'
msgArray[99]='world'

if(msgArray.length===100){
    console.log('The length is 100.')
}
// In this case the length of msgArray is 100