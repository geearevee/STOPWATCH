let hour = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let stop = document.querySelector("#stop");

let hh =0;
let mm =0;
let sec =0;
start.addEventListener("click", ()=>{
   let interval = setInterval(()=>{
     sec++;
     if(sec<10)
     {seconds.textContent=`0${sec}`;}
    else{seconds.textContent=`${sec}`;
    } 
    if(sec>59){
        mm++;
        
       
},100)
    start.disabled = true;
    pause.disabled = false;
    stop.disabled = false;

});

pause.addEventListener("click", ()=>{
    if(pause.textContent === "pause")
    {clearInterval(interval);
    pause.textContent = "continue";
}})