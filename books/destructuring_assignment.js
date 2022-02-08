
function toPolar(x, y){
    return [Math.sqrt(x*x + y*y), Math.atan2(y, x)];
}

console.log(toPolar(12, 13))

console.log("--------------------------------------");
function toCartesian(r, theta){
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0);

let [x, y] = toCartesian(r, theta)

console.log([x, y])

console.log("-------------------------------------------");

let o = { x: 1, y: 2};
for(const [name, value] of Object.entries(o)){
    console.log(name, value);
}

console.log("-----------------------------------------");

let [z, ...g] = [1, 2, 3, 4,6,7,7,7,6,4];

console.log(g);

console.log("--------------------------------------------");

let [a, [b, c]] = [1, [2, 2.5], 3]


console.log("-----------------------------------------");

let [first, ...rest] = "Hello";

console.log(rest);

console.log("---------------------------------------------");

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0} //A RGBA color

let {r, g, b} = transparent; //r == 0.0; g == 0.0; b == 1.0;