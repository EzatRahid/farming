let btn = document.getElementById('btn')
let counter = document.getElementById('counter')
let counterEle = 0;

btn.addEventListener('click', () =>{
    counter.innerHTML = counterEle
    counterEle+=1
    console.log('clicked')

    const timerFunc = () =>{
        timer.innerHTML = `${timerEle} seconds have passed`
    
        timerEle++
    
    
    }
    
    const yes = setInterval(timerFunc,1000)
})

let timer = document.getElementById("timer")
timerEle = 0;


