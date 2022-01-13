//creating an arrayBuffer
const buffer = new ArrayBuffer(234);


console.log(buffer)

console.log(buffer.byteLength)

//ArrayBuffer.isView
const buffer2 = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()))

//Using isView

console.log(ArrayBuffer.isView())
console.log(ArrayBuffer.isView([]))
console.log(ArrayBuffer.isView({}))
console.log(ArrayBuffer.isView(null))
console.log(ArrayBuffer.isView(undefined))
console.log(ArrayBuffer.isView(new ArrayBuffer(10)))


console.log(ArrayBuffer.isView(new Uint8Array()))
console.log(ArrayBuffer.isView(new Float32Array()))
console.log(ArrayBuffer.isView(new Int8Array(10).subarray(0,3)))

const buffer3 = new ArrayBuffer(2);
const dv = new DataView(buffer3);

console.log(dv)


//ArrayBuffer.prototype.slice()

const arrBuffer = new ArrayBuffer(16);

const int32View = new Int32Array(arrBuffer);
console.log(int32View);
int32View[1]=42;
console.log(int32View);
const sliced = new Int32Array(arrBuffer.slice(4,12))

console.log(sliced)

const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
console.log(buf2)

const buffer4 = new ArrayBuffer(4);
const view = new Int8Array(buffer4);

console.log(view)


