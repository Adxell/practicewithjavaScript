const buffer = new ArrayBuffer(16);

const max = 2n ** (64n - 1n) - 1n; 

const view = new DataView(buffer); 

view.setBigInt64(4, max)

console.log(view.getBigInt64(1))

console.log(buffer)

//getBigInt64(byteOffset)
//getBigInt64(byteOffset, littleEndian)

//example 
let buffer1 = new ArrayBuffer(8); 
let dataview = new DataView(buffer1); 

console.log(dataview.getBigInt64(0))

