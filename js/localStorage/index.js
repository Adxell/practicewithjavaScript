window.onload= start; 

function start(){
    var button = document.getElementById("addItems");
    button.addEventListener("click", clickButton);
    var btnDelete = document.getElementById("deleteItems");
    btnDelete.addEventListener("click", deleteItems);
}

function clickButton(){
    var inputText = document.getElementById("inputText");
    var notes=[]; 
    if(localStorage.notes){
        notes=JSON.parse(localStorage.notes);
    }
    notes.push(inputText.value);
    localStorage.notes=JSON.stringify(notes);
    showNotes();
}

function showNotes(){
    var showNotes = document.getElementById("showItems");
     if (localStorage.notes) {
       notas = JSON.parse(localStorage.notes);
     }
    html="";
    for ( var notas of notas ){
        html+=notas+"<br/>";
    }
    showNotes.innerHTML = html;
}
function deleteItems(){
    localStorage.clear();
    setTimeout(()=>{
        showNotes();
    }, 1000)
}