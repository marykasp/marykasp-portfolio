const allSections = document.querySelectorAll("section");
// list of all the nav links (a elements)
const linkItem = document.querySelectorAll(".nav__link");
// about me button
const aboutButton = document.querySelector(".about-me");
const contactBtn = document.querySelector(".contact-me");
const tabItem = document.querySelector(".tab-item");

// ================== SHOW SECTIONS FUNCTION   ========================
const showSection = function (element) {
  // iterate over all the sections and remove active class
  for (let i = 0; i < allSections.length; i++) {
    allSections[i].classList.remove("active");
  }
  // get the link attribute - returns ['', 'about']: select second item from array and store in target variable
  const target = element.getAttribute("href").split("#")[1];
  console.log(target);
  // add the active class to the section with same id as target
  document.querySelector("#" + target).classList.add("active");
};

// ================== SHOW NAVBAR ========================
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const bodyPd = document.getElementById(bodyId);
  const headerPd = document.getElementById(headerId);
  // validate that variables exist
  if (toggle && nav && bodyId && headerPd) {
    toggle.addEventListener("click", () => {
      // show navbar
      nav.classList.toggle("show");
      // change icon
      if (toggle.classList.contains("bx-menu")) {
        toggle.classList.remove("bx-menu");
        toggle.classList.add("bx-x");
      } else {
        toggle.classList.add("bx-menu");
        toggle.classList.remove("bx-x");
      }
      // add padding to body and header
      bodyPd.classList.toggle("body-pd");
      headerPd.classList.toggle("body-pd");
    });
  }
};

showNavbar("header-toggle", "nav-bar", "body-pd", "header");

// ====================== ACTIVE LINK & SHOW SECTION========================
// iterate over the link items
linkItem.forEach(function (link) {
  // add an event listener to each link (<a> element)
  link.addEventListener("click", function () {
    // remove active class from other links
    for (let i = 0; i < linkItem.length; i++) {
      linkItem[i].classList.remove("active");
    }
    // add active to link clicked on
    this.classList.add("active");
    // pass the clicked on link to showSection() function, to activate the right section
    showSection(this);
  });
});

// ====================== ABOUT BUTTON EVENT LISTENER ========================
// **** when clicked SHOW ACTIVE SECTION, CHANGE ACTIVE NAV LINK *****
aboutButton.addEventListener("click", function (e) {
  // turn the href value #about into an array, select second element - about
  // add active class to section with id of target (#about)
  showSection(e.target);

  // add active class to navlink with same href attribute
  linkItem.forEach(function (link) {
    if (link.getAttribute("href").includes("about")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

contactBtn.addEventListener("click", (e) => {
  // show the specific section with id of contact
  showSection(e.target);
  console.log(e.target.getAttribute("href").split("#")[1]);
  // add active class to navlink with same href attribute
  linkItem.forEach(function (link) {
    if (link.getAttribute("href").includes("contact")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

function bodyScrollingToggle() {
  document.body.classList.toggle("stop-scrolling");
}

// ====================== ABOUT TABS SWITCH ========================
// ====================== TAB ITEM TURN ACTIVE WHEN CLICKED =================
const tabsContainer = document.querySelector(".about-tabs");
console.log(tabsContainer);
const aboutSection = document.querySelector("#about");

// add event listener to tabs container
tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    // remmove active from other tab item
    document.querySelector(".tab-item.active").classList.remove("active");
    // add active class to tab clicked on
    e.target.classList.add("active");
    // get data attribute of tab item - will match the id of the tab-content element to display
    const target = e.target.getAttribute("data-target");
    // remove active class from the tab-content that is already active
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    // get the tab content that matches the target and add the active class
    aboutSection.querySelector(target).classList.add("active");
  }
});

// ====================== CONTACT FORM ========================
// Add focus class when the input is in foucs, and remove it when the input lost focus
const inputs = document.querySelectorAll(".input");

// when input is focused, select parent (.input-container) and add focus class to the parent
function focusFunc(e) {
  let parent = e.currentTarget.parentNode;
  parent.classList.add("focus");
}

function blurFunc(e) {
  let parent = e.currentTarget.parentNode;
  // console.log(e.currentTarget.value);
  if (e.currentTarget.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Send Email
// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "kasparian.mary@gmail.com",
//     Password: "password",
//     To: "kasparian.mary@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New Contact Form Enquiry",
//     Body: `Name: ${document.getElementById("name").value}
//     ${document.getElementById("email").value}

//     ${document.getElementById("message").value}

//     `,
//   }).then((message) => alert(message));
// }
