//Examples 

//From a length
let bigint64 = new BigInt64Array(2);
bigint64[0]=42n;
console.log(bigint64[0])
console.log(bigint64.length);
console.log(bigint64.BYTES_PER_ELEMENT);

//From an array 

let arr = new BigInt64Array([21n, 31n]);
console.log(arr[1])


//From another typedArray
let x = new BigInt64Array([21n, 31n]);
let y = new BigInt64Array(x);
console.log(y[0])

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new BigInt64Array(buffer, 0, 4);

//From an iterable
let itereable = function*(){yield*[1n, 2n, 3n];}();
let bigint641 = new BigInt64Array(itereable);

console.log(bigint641)