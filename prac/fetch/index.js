
function loadJson(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(jsonLoaded)
}

function jsonLoaded(json){
    let showJson=document.querySelector(".showJson");
    showJson.innerHTML=`user id= ${json.userId}<br/> <h1>title=${json.title}</h1>`;
    console.log(json)
}

loadJson();