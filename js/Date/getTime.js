const moonLanding = new Date('July 20, 69 20:17:40 GMT +00:00');

console.log(moonLanding.getTime());


let birthday = new Date(1994, 11, 10);
let copy = new Date();
copy.setTime(birthday.getTime());

console.log(copy)

//Example Measuring execution time 

let end, start;

start = new Date();
for(let i=0; i<100000; i++){
    Math.sqrt(i);
}

end = new Date();

console.log('Operation took '+(end.getTime()-start.getTime())+' msec');
