const animals = [
  "Dodo",
  "Tiger",
  "penguin",
  "penguin",
  "penguin",
  "penguin",
  "Dodo",
  "Dodo",
  "Dodo",
  "Dodo",
];

console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Tiger'));

//example 

var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3

//finding all the occurrences of an element
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]
