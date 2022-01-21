
//create an ArrayBuffer
const buffer = new ArrayBuffer(123);


//Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
//Examples 

let buffer1 = new ArrayBuffer(8);
let dataview = new DataView(buffer1);

console.log(dataview.buffer1)