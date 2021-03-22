const increment = document.querySelector('.increment')
const reset = document.querySelector('.reset')
const decrement = document.querySelector('.decrement')

let digits = document.querySelector('.digit')
    //control inner 
let newDigit = digits.innerText
    //change type of that number
var num = parseInt(newDigit)



increment.addEventListener('click', () => {
    num++
    digits.textContent = num;
})
reset.addEventListener('click', () => {
    num = 0
    digits.textContent = 0;
})
decrement.addEventListener('click', () => {
    num--
    digits.textContent = num;

})

// function color(num) {
//     if (num < 0) {
        
//     }
//     else
// }
