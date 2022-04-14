const allSections = document.querySelectorAll("section");
// list of all the nav links (a elements)
const linkItem = document.querySelectorAll('.nav__link');

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
      if(toggle.classList.contains('ri-menu-line')) {
        toggle.classList.remove('ri-menu-line')
        toggle.classList.add('ri-close-fill')
      } else {
        toggle.classList.add('ri-menu-line')
        toggle.classList.remove('ri-close-fill')
      }
      // add padding to body
      bodyPd.classList.toggle('body-pd')
      headerPd.classList.toggle('body-pd');
    })
  }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

// ====================== ACTIVE LINK & SHOW SECTION========================
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


