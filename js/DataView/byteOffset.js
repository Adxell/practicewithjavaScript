const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4);

console.log(view.byteOffset)

//Example
let buffer1 = new ArrayBuffer(8);
let dataview = new DataView(buffer1);

console.log(dataview.byteOffset)

let dataview2 = new DataView(buffer1, 6);

console.log(dataview2.byteOffset)