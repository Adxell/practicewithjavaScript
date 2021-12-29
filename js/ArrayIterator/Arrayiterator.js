// const arr=['a', 'b', 'c','d','e','f','g','h'];
// const array=arr[Symbol.iterator]();

// const letterResult=document.getElementById("letterResult");

// for (let letter of array){
//     const li= document.createElement("LI");
//     li.textContent=letter;
//     letterResult.appendChild(li);
// }

// var arr = ["a", "b", "c", "d", "e"];
// var eArr = arr[Symbol.iterator]();
// console.log(eArr.next().value);
// console.log(eArr.next().value);
// console.log(eArr.next().value);
// console.log(eArr.next().value);
// console.log(eArr.next().value);
//----------funtion loop-------------------

function logIterable(objects){
    if(!(Symbol.iterator in Object.getPrototypeOf(objects))){
        console.log(objects, 'is not an iterable object...');
        return;
    }

    let iterator = objects[Symbol.iterator]();
    for (let letter of iterator){
        console.log(letter);
    }
}
logIterable(["a", "b", "c"]);
logIterable("hola mi nombre es adxell");

