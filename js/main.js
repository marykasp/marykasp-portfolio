const allSections = document.querySelectorAll("section");
// list of all the nav links (a elements)
const linkItem = document.querySelectorAll('.nav__link');
// about me button
const button = document.querySelector(".about-me");
const tabItem = document.querySelector(".tab-item");

// portfolio selectors
const filterContainer = document.querySelector('.portfolio-filter');
const portfolioItemsContainer = document.querySelector('.portfolio-items');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const popup = document.querySelector('.portfolio-popup');
// console.log(popup)
const prevBtn = popup.querySelector('.pp-prev');
const nextBtn = popup.querySelector('.pp-next');
const closeBtn = popup.querySelector('.pp-close');
const projectDetailsContainer = popup.querySelector('.pp-details');
const projectDetailsBtn = popup.querySelector('.pp-project-details-btn');
let itemIndex, slideIndex, screenshots;


// ================== SHOW SECTIONS FUNCTION========================
const showSection = function(element) {
  // iterate over all the sections and remove active class
  for(let i = 0; i < allSections.length; i++) {
    allSections[i].classList.remove("active")
  }
  // get the link attribute - returns ['', 'about']: select second item from array and store in target variable
  const target = element.getAttribute("href").split("#")[1]
  console.log(target)
  // add the active class to the section with same id as target
  document.querySelector('#' + target).classList.add("active")
}

// ================== SHOW NAVBAR ========================
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const bodyPd = document.getElementById(bodyId);
  const headerPd = document.getElementById(headerId)
  // validate that variables exist
  if(toggle && nav && bodyId && headerPd) {
    toggle.addEventListener("click", () => {
      // show navbar
      nav.classList.toggle('show')
      // change icon
      if(toggle.classList.contains('bx-menu')) {
        toggle.classList.remove('bx-menu')
        toggle.classList.add('bx-x')
      } else {
        toggle.classList.add('bx-menu')
        toggle.classList.remove('bx-x')
      }
      // add padding to body and header
      bodyPd.classList.toggle('body-pd')
      headerPd.classList.toggle('body-pd');
    })
  }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

// ====================== ACTIVE LINK & SHOW SECTION========================
// iterate over the link items
linkItem.forEach(function(link) {
  // add an event listener to each link (<a> element)
  link.addEventListener("click", function() {
    // remove active class from other links
    for(let i = 0; i < linkItem.length; i++) {
      linkItem[i].classList.remove("active")
    }
    // add active to link clicked on
    this.classList.add("active");
    // pass the clicked on link to showSection() function, to activate the right section
    showSection(this)
  })
})

// ====================== ABOUT BUTTON EVEN LISTENER ========================
// **** when clicked SHOW ACTIVE SECTION, CHANGE ACTIVE NAV LINK *****
button.addEventListener("click", function(e) {
  // turn the href value #about into an array, select second element - about
  // add active class to section with id of target (#about)
  showSection(e.target)

  // add active class to navlink with same href attribute
  linkItem.forEach(function(link) {
    if(link.getAttribute("href").includes('about')) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
})

// ====================== TAB ITEM TURN ACTIVE WHEN CLICKED =================
tabItem.addEventListener("click", function(e) {
  const target = e.target.getAttribute("data-target")
})

function bodyScrollingToggle() {
  document.body.classList.toggle("stop-scrolling")
}

// ====================== PORTFOLIO FILTER & POPUP ========================

// *** filter portfolio items - Event Listener
filterContainer.addEventListener("click", function(e) {
  if(e.target.classList.contains("filter-item") && !e.target.classList.contains("active")) {
    // deactive existing filter active item
    filterContainer.querySelector('.active').classList.remove("active")
    // activate new filter item that was clicked on
    e.target.classList.add("active");
    // get data-target value from filter item
    const target = e.target.getAttribute("data-target");

    // iterate over the portfolio items - if the data category matches the target then remove hide class and add show class
    portfolioItems.forEach((item) => {
      if(item.getAttribute("data-category") === target || target === "all") {
        item.classList.remove("hide");
        item.classList.add("show")
      } else {
        item.classList.add("hide");
        item.classList.remove("show")
      }
    })
  }
})

portfolioItemsContainer.addEventListener("click", (e) => {
  if(e.target.closest(".portfolio-item-inner")) {
    // get parent element of portfolio-item-inner elements (portfolio item div itself)
    const portfolioItem = e.target.closest(".portfolio-item-inner").parentElement;

    // get portfolio item index by using indexOf on the portfolioItem list
    itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);

    // use index to retrieve the specific image element
    // screenshots = portfolioItem.querySelector(".portfolio-item-img")
    screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
    // convert strings of screenshots into an array of strings
    screenshots = screenshots.split(",");
    slideIndex = 0;
    // call popup toggle function
    popupToggle();
  }
})

function popupToggle() {
  popup.classList.toggle("open");
  bodyScrollingToggle();
}
