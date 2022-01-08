const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(' '));
console.log(elements.join('-'));

var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
//Joining an array-like object 

function f(a, b, c){
    var s = Array.prototype.join.call(arguments);
    console.log(s);
}

f(1, 'a', true)