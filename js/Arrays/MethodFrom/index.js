//console.log(Array.from("12345"))

//console.log(Array.from([1,2,3], x => x + x))

//Array from a string 

Array.from("foo")

//Array from a Set

const set = new Set(['foo', 'bar', 'baz', 'foo']);

Array.from(set)
//console.log(Array.from(set))

//Array from a Map

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
//console.log(Array.from(map));

const mapper = new Map([['1', 'a'], ['2','b']]);

//console.log(Array.from(mapper.values()))
//console.log(Array.from(mapper.keys()))

//Array from a NodeList
const images = document.getElementsByTagName("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));

//Array from an Array-like object (arguments)

function f (){
    return Array.from(arguments);
}

f(1,2,3)

//console.log(f(1,2,3))

//Using arrow functions and Array.from()

//console.log(Array.from([1,2,3], x => x + x))


//console.log(Array.from({length: 1000}, (v,i) => i));

//Sequence generator (range)

const range = (start, stop , step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + ( i * step))

console.log(range(0,4,1))
console.log(range(0,10,2))
console.log(range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)));

