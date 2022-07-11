// ================= Toggle Style Switcher ===========================
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
const colors = document.querySelectorAll(".colors span");
const toast = document.querySelector(".toast");
const progress = document.querySelector(".progress");
const closeIcon = document.querySelector(".close");

console.log(progress);

// show style theme switcher on click
styleSwitcherToggler.addEventListener("click", function () {
  styleSwitcher.classList.toggle("open");
});

// iterate over the colors and add a click event for each to trigger the toast notification
colors.forEach((color) => {
  color.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("play");

    setTimeout(() => {
      toast.classList.remove("active");
      progress.classList.remove("play");
    }, 5000);
  });
});

// close toast notification when click on close icon
closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
});

// hide style theme switcher on scroll
window.addEventListener("scroll", function () {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

// ================= Alternate Style Colors ============================
// select color style links with unique title attritbutes
const alternateStyles = document.querySelectorAll(".alternate-style");

// itearate over the NodeList of color relative links, if the color passed in matches the ttitle attribute remove the disabled attribute, else add the disabled attribute
const setActiveStyle = function (color) {
  alternateStyles.forEach((style) => {
    if (color == style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};

// ================= Alternate Light & Dark Mode ============================
// get checkbox input
const dayNight = document.querySelector("#toggle");

dayNight.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  }
});
