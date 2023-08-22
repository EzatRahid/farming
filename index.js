let btn = document.getElementById('btn')
let counter = document.getElementById('counter')
let counterEle = 0;

btn.addEventListener('click', () =>{
    counterEle = counter++;
    counter = counterEle


})