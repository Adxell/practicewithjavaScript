
const object = { x: 1, y: 2}
const objectString = object.toString();
console.log(object.toString());
console.log(objectString);

console.log("----------------------")
//toString()
console.log([1,2,3].toString());
console.log((function(x) { f(x); }).toString());
console.log(/\d+/g.toString())
let d = new Date(2020, 0, 1);
console.log(d.toString())
//valueOf()
console.log("---------------------------------")
let date = new Date(2010, 0, 1);

console.log(date.valueOf());

console.log(Number([]))