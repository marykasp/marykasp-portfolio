// ====== SHOW NAVBAR ========
const showNavbar = (toggleId, navId, bodyId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const bodyPd = document.getElementById(bodyId);

  // validate that variables exist
  if(toggle && nav && bodyId) {
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
    })
  }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd')

// ======= LINK ACTIVE ========
// list of all the nav links (a elements)
const linkColor = document.querySelectorAll('.nav__link');

linkColor.forEach(function(link) {
  // add an event listener to each link (<a> element)
  link.addEventListener("click", function() {
    // remove active class from other links
    for(let i = 0; i < linkColor.length; i++) {
      linkColor[i].classList.remove("active")
    }
    // add active to link clicked on
    this.classList.add("active");
  })
})


