// ================= Toggle Style Switcher =============================
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", function() {
  document.querySelector(".style-switcher").classList.toggle("open")
})
// const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggler.addEventListener("click", () => {
//   document.querySelector(".style-switcher").classList.toggle("open");
// })

// // hide style switcher on scroll
// window.addEventListener("scroll", () => {
//   if(document.querySelector(".style-switcher").classList.contains("open")) {
//     document.querySelector(".style-switcher").classList.remove("open");
//   }
// })

// // ================= Alternate Style Colors =============================
// const alternateStyles = document.querySelectorAll(".alternate-style");

// function setActiveStyle(color) {
//   alternateStyles.forEach((style) => {
//     if(color == style.getAttribute("title")) {
//       style.removeAttribute("disabled");
//     }
//     else {
//       style.setAttribute("disabled", "true");
//     }
//   })
// }

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
