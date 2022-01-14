const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);

console.log(int32[0]);

console.log(Atomics.store(int32, 0, 123));
console.log(Atomics.notify(int32, 0, 1));