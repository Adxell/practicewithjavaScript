const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');

console.log(count)
console.log(animals)
animals.push('chickens', 'cats', 'dogs');

console.log(animals)

//Merging two arrays

let vegetables = ['parsnip','potato'];

let moreVegs = ['celery', 'beetroot'];

vegetables.push(...moreVegs);

console.log(vegetables)