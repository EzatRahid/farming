let btn = document.getElementById('btn')
let counter = document.getElementById('counter')
let counterEle = 0;

btn.addEventListener('click', () =>{
    counter.innerHTML = counterEle
    counterEle+=2
    console.log('clicked')

})

const timerOutput = document.getElementById('timer');
let seconds = 0;

function updateTimer() {
    timerOutput.textContent = seconds + ' seconds';
    seconds++;
}

function startTimer() {
    updateTimer();
    setTimeout(startTimer, 1000); // Call startTimer again after 1000ms (1 second)
}

startTimer();
