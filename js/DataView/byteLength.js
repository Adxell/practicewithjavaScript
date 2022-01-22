const  buffer = new ArrayBuffer(16); 

const view1 = new DataView(buffer);
const  view2 = new DataView(buffer, 12, 4); //from byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength);

//Examples 

//Using the byteLength property 

let buffer1 = new ArrayBuffer(8);
let dataview = new DataView(buffer1);
dataview.byteLength;
console.log(dataview.byteLength)

let dataview2 = new DataView(buffer1, 1, 3);

console.log(dataview2.byteLength)

let dataview3 = new DataView(buffer1, 8);

console.log(dataview3.byteLength)
