// const array1= ['a', 'b', 'c','d'];


// array1.forEach(element => console.log(element));

// forEach expects a synchronous function. 
 
//example 
// const arraySparse= [1,3,,7,,,,5];

// let numCallbackRuns=0; 
// arraySparse.forEach(function (element){
//     console.log(element);
//     numCallbackRuns++;
// })

// console.log('numCallbackRuns: '+numCallbackRuns)


// const items= [ 'item1', 'item2', 'item3'];

// const copyItems=[];

// items.forEach(function(item){
//     copyItems.push(item)
// })
// console.log(copyItems)

// function logArrayElements(element, index){
//     console.log('a['+index+']= '+element)
// }

// console.log([2,5,7,9].forEach(logArrayElements))

//using thisArg


function Counter(){
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add=function(array){
    array.forEach(function countEntry(entry){
        this.sum+=entry;
        ++this.count;
    }, this)
}

const obj = new Counter ();

obj.add([2,5,9])

//console.log(obj.count)
//console.log(obj.sum)


let words = ['one', 'two', 'three', 'four'];



words.forEach(function(word){
    console.log(word)
    if(word==='two'){
        words.shift()
    }
})

console.log(words)


