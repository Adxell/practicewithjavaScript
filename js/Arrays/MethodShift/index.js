const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1)

console.log(firstElement)
//Removing an element from an array 
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ', JSON.stringify(myFish));

let shifted = myFish.shift(); 

console.log('myFish after: ', myFish)

console.log('Removed this element: ', shifted)

//Using shift method in while loop 

let names = ['andrew', 'edward', 'paul', 'chris', 'john'];

while(typeof(i=names.shift()) !=='undefined'){
    console.log(i)
}