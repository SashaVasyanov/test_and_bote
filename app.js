let myName = "myName";
let age = 22;
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav_link");
const btn = document.querySelector(["#testbtn"]);

myName = "Sasha";
console.log(header);
console.log(myName, age);
console.log(navLinks);

function sayGoodBye() {
  let message = "Good Bye" + " " + myName;
  console.log(message);
}
sayGoodBye();

function simpleMath(a, b) {
  let reuslt = a * b;
  return reuslt;
}
let multiplication = simpleMath(23, 23);
console.log(multiplication);

window.addEventListener("scroll", chekScroll);

document.addEventListener("DOMContentLoaded", chekScroll);

function chekScroll() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add("red");
  } else {
    header.classList.remove("red");
  }
}
testbtn.addEventListener("click", function () {
  console.log("clicked");
});

for (let navItem of navLinks) {
  navItem.addEventListener("click", function () {
    console.log("link clicked");
  });
}
