let letters= [];
with(Array.prototype){
    letters.push("a");
}
Object.keys(Array.prototype[Symbol.unscopables]);
console.log(Object.keys(Array.prototype[Symbol.unscopables]));