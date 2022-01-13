const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
//console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
//console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//Method toLocaleString 

const array1 = [1, 'a', new Date('21 DEc 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString)

var prices = [500, 8123, 12];
let showPrices = prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
console.log(showPrices)
// "￥7,￥500,￥8,123,￥12"

//Method toString

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());
// expected output: "1,2,a,1a"


//Method unshift
const array2 = [1, 2, 3];

console.log(array2.unshift(4, 5));
// expected output: 5

console.log(array2);
// expected output: Array [4, 5, 1, 2, 3]

//Method Values

const array3 = ["a", "b", "c"];
const iterator = array3.values();

for (const value of iterator) {
  console.log(value);
}

let array4 = ['a', 'b', 'c', 'd', 'e'];

let iterator1 = array4.values();

console.log(iterator1.next().done ? "ha terminado": "no ha terminado")

