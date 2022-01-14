const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.store(uint8, 0, 2));

console.log(Atomics.load(uint8, 0));

console.log("-----------------------------");

//Using store()



let sab = new SharedArrayBuffer(1024);
let ta = new Uint8Array(sab);

console.log("this is result",Atomics.store(ta, 0, 12))
