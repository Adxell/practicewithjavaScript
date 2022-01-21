
//Endianness 
let littleEndian = (function(){
    let buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true /* littleEndian */)
    //Int16Array uses the platform's endianness
    return new Int16Array(buffer)[0] === 256;
})();

console.log(littleEndian);

//64-bit integer Values

function getUint64(dataview, byteOffset, littleEndian){
    // split 64-bit number into two 32-bit (4-byte) parts 
    const left = dataview.getUint32(byteOffset, littleEndian);
    const right = dataview.getUint32(byteOffset+4, littleEndian);

    //combine the two 32-bit values

    const combined = littleEndian? left + 2**32*right : 2**32*left +right;

    if(!Number.isSafeInteger(combined)){
        console.warn(combined, 'exceeds MAX_SAFE_INTEGER. Precosion may be lost');
    }

    return combined;
}

const BigInt = window.BigInt,
  bigThirtyTwo = BigInt(32),
  bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = BigInt(dataview.getUint32(byteOffset | 0, !!littleEndian) >>> 0);
  const right = BigInt(
    dataview.getUint32(((byteOffset | 0) + 4) | 0, !!littleEndian) >>> 0
  );

  // combine the two 32-bit values and return
  return littleEndian
    ? (right << bigThirtyTwo) | left
    : (left << bigThirtyTwo) | right;
}
