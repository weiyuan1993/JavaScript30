const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
let countDown;
function timer(seconds){
    //clear other exist countDown
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds*1000;
    displayTime(seconds);
    displayEndTime(then);
    countDown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);
        console.log(secondsLeft)
        displayTime(secondsLeft);
        if(secondsLeft<=0){
            clearInterval(countDown)
        }
    },1000)
}

function displayTime(seconds){
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds%60;
    const display = `${minutes}:${remainderSeconds<10?'0':''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hours = end.getHours();
    const mins = end.getMinutes();
    const adjustedHour = hours >12 ? hours-12:hours;
    endTime.textContent = `Be Back At ${adjustedHour}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer(){
    const seconds=parseInt(this.dataset.time);
    timer(seconds); 
}

buttons.forEach(btn=>btn.addEventListener('click',startTimer));


// 以 name 來取得 element 可以直接透過 document 取得
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    // reset form value;
    this.reset();
})