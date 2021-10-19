//varibles
let time=0;
let timeid=0;
let timeout=true;
//elements
const start=document.querySelector("#start");
const reset=document.querySelector("#reset");
const timer=document.querySelector("#time-display");

const initclock=()=>{
    timeout=false;
    timeid=setInterval(() => {
        time++;
        timercount();

        
    }, 1000);
};

const stopclock=()=>{
    clearInterval(timeid);

}

start.addEventListener("click",()=>{
   if(time==0){ initclock();}
});
reset.addEventListener("click",()=>{
    stopclock();
    timeout=true;
    time=0;
    timercount();

});

const timercount = () => {
    const timer = document.querySelector("#time-display");
    const min = Math.floor(time / 60);
    const sec = time % 60;
    if (sec < 10) {
      timer.innerHTML = `${min}:0${sec}`;
    } else {
      timer.innerHTML = `${min}:${sec}`;
    }
  }