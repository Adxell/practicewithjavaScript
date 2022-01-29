let n = 17; 
let binary = "0b" + n.toString(2);
console.log(binary)
let octal = "0o" + n.toString(8);
console.log(octal);
let hex = "0x" + n.toString(16);
console.log(hex);

//----------------------------

let number = 123456.789;
number.toFixed(0);
console.log(number.toFixed(0))
console.log(number.toFixed(2))
console.log(number.toFixed(5))
console.log(number.toExponential(1))
console.log(number.toExponential(3))
console.log("---------------------")
console.log(number.toPrecision(3))
console.log(number.toPrecision(7));
console.log(number.toPrecision(10));

console.log("-----------------------------------")

console.log(parseInt("3 blind mice")) // => 3
console.log(parseFloat("3.14")) // => 3.14
console.log(parseInt("-12.34")) // => -12
console.log(parseInt("0xFF")) // => 255
console.log(parseInt("0xff")) // => 255
console.log(parseInt("-0XFF")) // => -255
console.log(parseFloat(".1")) // => 0.1
console.log(parseInt("0.1")) // => 0
console.log(parseInt(".1")) // => NaN: integers can't start with "."
console.log(parseFloat(" 72.47$")) // => NaN: numbers can't start with "$"