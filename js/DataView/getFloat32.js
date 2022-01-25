const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);

view.setFloat32(0, Math.PI);

console.log(view.getFloat32(1))
console.log(buffer)

//getFloat32(byteOffset)
//getFloat32(byteOffset, littleEndian)

