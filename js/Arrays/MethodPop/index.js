const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
console.log(plants);

plants.pop();

console.log(plants);

//Examples 
// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// var popped = myFish.pop();

// console.log(myFish); // ['angel', 'clown', 'mandarin' ]

// console.log(popped); // 'sturgeon'

//Using apply() or call() on array-like objects

let myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4 };

let popped = Array.prototype.pop.call(myFish);

console.log(myFish);
console.log(popped)