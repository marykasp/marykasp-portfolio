// ================= Toggle Style Switcher =============================
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector('.style-switcher');

// show style theme switcher on click
styleSwitcherToggler.addEventListener("click", function() {
  styleSwitcher.classList.toggle("open")
})

// hide style theme switcher on scroll
window.addEventListener("scroll", function() {
  if(styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open")
  }
})

// ================= Alternate Style Colors =============================
const alternateStyles = document.querySelectorAll(".alternate-style");

const setActiveStyle = function(color) {
  alternateStyles.forEach((style) => {
    if(color == style.getAttribute("title")) {
      style.removeAttribute("disabled")
    } else {
      style.setAttribute("disabled", "true")
    }
  })
}



// // ================= Light & Dark Mode =============================
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("ri-sun-fill");
//   dayNight.querySelector("i").classList.toggle("ri-moon-fill");
//   document.body.classList.toggle("dark");
// })

// window.addEventListener("load", () => {
//   if(document.body.classList.contains("dark")) {
//     dayNight.querySelector("i").classList.add("ri-sun-fill")
//   }
//   else {
//     dayNight.querySelector("i").classList.add("ri-moon-fill")
//   }
// })
