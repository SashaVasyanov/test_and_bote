let myName = 'myName';
let age = 22
const header = document.querySelector('.header')
const navLinks = document.querySelectorAll('.nav_link')

myName = 'Sasha'
console.log(header)
console.log(myName, age)
console.log(navLinks)

function sayGoodBye() {
    let message = 'Good Bye' + " " + myName
    console.log(message)
}
sayGoodBye()

function simpleMath(a, b) {
    let reuslt = a * b;
    return reuslt
}
let multiplication = simpleMath(23, 23)
console.log(multiplication)


window.addEventListener('scroll', function() {
   let scrollPosition = window.scrollY;
   console.log(scrollPosition)
   if(scrollPosition > 0) {
    header.classList.add('red')
   } else {
    header.classList.remove('red')
   }
    
})































