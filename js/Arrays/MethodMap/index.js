// const array1 = [1, 4, 9, 16];

// const map1 = array1.map(function(x) {
//    return x * 2
// } )

// const map2 = array1.map ( x => x * 2)


// console.log(map1)
// console.log(map2)

//axamples 
let numbers = [1, 4, 9]; 
let roots = numbers.map(function(x){
    return Math.sqrt(x);
})

console.log(roots)
//using map to reformat objects in an array

let kvArray= [{key: 1, value: 10}, 
              {key: 2, value: 20},
              {key: 3, value: 30}]; 

let reformattedArray = kvArray.map(obj =>{
    let rObj = {}
    rObj[obj.key]= obj.value;
    return rObj
})
console.log(reformattedArray)
//using map generically

let map=Array.prototype.map; 
let a = map.call("adxell", function(x){
    return x.charCodeAt(0);
})
console.log(a)


console.log(['1', '2', '3'].map(Number))
