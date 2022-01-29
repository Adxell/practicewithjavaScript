let strname = 'String name';

let symname = Symbol("propname");

console.log(strname);
console.log(symname);

let o = {};

o[strname] = 1; 

o[symname] = 2;

console.log(o[strname])
console.log(o[symname])
