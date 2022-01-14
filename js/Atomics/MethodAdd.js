const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);

uint8[0]=7;

console.log(Atomics.add(uint8, 0, 2));

console.log(Atomics.load(uint8, 0))

//Using add()

const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

console.log(Atomics.add(ta, 0, 12))
console.log(Atomics.load(ta, 0))