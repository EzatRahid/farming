let btn = document.getElementById('btn')
let counter = document.getElementById('counter')
let counterEle = 0;

btn.addEventListener('click', () =>{
    counter.innerHTML = counterEle
    counterEle+=1
    console.log('clicked')

})

let timer = document.getElementById("timer")
timerEle = 0.00;

let start = document.getElementById('start')
let stop = document.getElementById('stop')

const timerFunc = () =>{
    timer.innerHTML = `${timerEle} seconds have passed`

    timerEle++

    if(timerEle === 10){
        timer.innerHTML = `YOUR A FAGGOT NIGGA`
    }


}
start.addEventListener('click', () =>{

    const yes = setInterval(timerFunc,1000)
})

stop.addEventListener('click', () =>{

    clearInterval(timerFunc)


})



