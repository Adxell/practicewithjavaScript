// var showMessage=function(){
//     alert("this is a message"); 
// }
// const showMessage=()=>{
//     alert("this is a message"); 
// }

// setTimeout(() => alert("this is a message"), 3000); 

// function showTimers(){
//     alert("test")
// } 

var timer=setInterval(()=>alert("timeout"), 2000); 
console.log(timer)
//end timer
setTimeout(()=>{
    clearInterval(timer)
},10000)