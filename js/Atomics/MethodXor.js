const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0]=7;

console.log(Atomics.xor(uint8, 0, 2));

console.log(Atomics.load(uint8, 0));
setTimeout(()=>{
    console.clear()
    usingXor()
}, 1000)

//Using xor()
function usingXor(){
    const sab = new SharedArrayBuffer(1024);
    const ta = new Uint8Array(sab);
    ta[0]=5;
    console.log(Atomics.xor(ta, 0, 1));
    console.log(Atomics.load(ta, 0));
}