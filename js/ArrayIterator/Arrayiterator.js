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

let inputText=document.querySelector(".inputText");
let button = document.querySelector(".buttonAction");
let buttonTwo = document.querySelector(".buttonActionTwo");
buttonTwo.addEventListener("click",()=>{
    button.toggleAttribute("hidden");
})
buttonTwo.addEventListener("click", ()=>{
    logIterable(inputText.value);
})
inputText.addEventListener("keydown",()=>{
    buttonTwo.removeAttribute("disabled");
})
function logIterable(objects) {
  if (!(Symbol.iterator in Object.getPrototypeOf(objects))) {
    console.log(objects, "is not an iterable object...");
    return;
  }
  let iterator = objects[Symbol.iterator]();
  for (let letter of iterator) {
    console.log(letter);
  }
}


