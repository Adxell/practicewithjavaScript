const sab = new SharedArrayBuffer(1024); 
const int32 = new Int32Array(sab);
int32[0]= 100;
console.log(Atomics.wait(int32, 0, 123, 5000))
console.log(Atomics.store(int32, 0, 123))
console.log(int32[0])