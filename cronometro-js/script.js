const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const miliSecondsEl = document.querySelector('#mili-seconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const continueBtn = document.querySelector('#continueBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;
isPaused = false;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
continueBtn.addEventListener('click', continuebtn);
resetBtn.addEventListener('click', resetTimer)

function startTimer(){

    interval = setInterval(() => {
        
        if(!isPaused){
            miliSeconds += 10;

            if(miliSeconds === 1000) {
                seconds++;
                miliSeconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            miliSecondsEl.textContent = formatMiliseconds(miliSeconds);
        }

    }, 10);

    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'block';
}

function continuebtn(){
    isPaused = false;
    pauseBtn.style.display = 'block';
    continueBtn.style.display = 'none';
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    miliSecondsEl.textContent = "000"

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    continueBtn.style.display = 'none'

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time){
    return time < 100 ? `${time}` .padStart(3, '0') : time
}