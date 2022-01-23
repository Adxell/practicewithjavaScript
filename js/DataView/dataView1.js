const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer)
const view2 = new DataView(buffer, 12, 4)
view1.setInt8(12, 42);

console.log(view2.getInt8(1));

console.log(buffer)

//Examples 

//using DataView

let buffer1 = new ArrayBuffer(16);
let view = new DataView(buffer1);


view.setInt16(2, 42);

console.log(view.getInt16(2));
console.log(buffer1)