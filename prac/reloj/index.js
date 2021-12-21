const relog = document.getElementsByClassName("reloj")[0];

setInterval(()=>{
    var date = new Date;
    
    var hour=date.getHours()-12;
    if(hour<10){
        hour=`0${hour}`
    }
    var minutes=date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    var second=date.getSeconds();
    if(second<10){
        second=`0${second}`
    }
    relog.innerHTML = `Time: ${hour}:${minutes}:${second}`;
},1000)