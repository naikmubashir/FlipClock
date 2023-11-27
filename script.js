
const secFront =document.querySelector('.seconds-front')
const secBack =document.querySelector('.seconds-back')

const minFront =document.querySelector('.minutes-front')
const minBack =document.querySelector('.minutes-back')

const hourFront =document.querySelector('.hours-front')
const hourBack =document.querySelector('.hours-back')


function time(){
    const date=new Date()
    
    const sec=date.getSeconds()
    secFront.innerHTML=`${sec}`
    secBack.innerHTML=`${sec}`
    
    const min=date.getMinutes()
    minFront.innerHTML=`${min}`
    minBack.innerHTML=`${min}`

    const hour=date.getHours()
    hourFront.innerHTML=`${hour}`
    hourBack.innerHTML=`${hour}`

    // secFront.style.transform='rotateX(180deg)'
    // secBack.style.transform='rotateX(180deg)'
    secFront.style.transition='all 1s'
    secBack.style.transition='all 1s'
}
setInterval(time,1000)
