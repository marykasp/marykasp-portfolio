// portfolio selectors
const filterContainer = document.querySelector(".portfolio-filter");
const portfolioItemsContainer = document.querySelector(".portfolio-items");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const popup = document.querySelector(".portfolio-popup");
// console.log(popup)
const prevBtn = popup.querySelector(".pp-prev");
const nextBtn = popup.querySelector(".pp-next");
const closeBtn = popup.querySelector(".pp-close");
const projectDetailsContainer = popup.querySelector(".pp-details");
const projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
let itemIndex, slideIndex, screenshots;

function popupToggle() {
  popup.classList.toggle("open");
  bodyScrollingToggle();
}

function popupSlideshow() {
  // get first image from screenshots array based on portfolio item clicked on
  console.log(itemIndex);
  const imgSrc = screenshots[slideIndex];
  // console.log(imgSrc)
  // get popupImg element
  const popupImg = popup.querySelector(".pp-img");
  const popupLink = popup.querySelector(".pp-link");
  console.log(popupLink);
  const detailsLink = portfolioItems[itemIndex]
    .querySelector(".portfolio-item-details")
    .querySelector(".project-link").href;

  // update the href attribute of the popup link to match the link in the details
  popupLink.href = detailsLink;

  // activate loader until the popupImg loaded
  popup.querySelector(".pp-loader").classList.add("active");
  // change the src of the popupimg to be equal to the screenshot
  popupImg.src = imgSrc;

  popupImg.onload = () => {
    // deactive loader after the popupImg loads
    popup.querySelector(".pp-loader").classList.remove("active");
  };
  // popup counter - change the inner HTML to match the number of images for each project
  popup.querySelector(".pp-counter").innerHTML =
    slideIndex + 1 + " of " + screenshots.length;
}

function popupDetails() {
  // if the portfolio item details does not exist
  if (!portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
    projectDetailsBtn.style.display = "none";
    return; /* end function execution */
  }

  projectDetailsBtn.style.display = "block";
  // get the project details from the portfolioItem
  const details = portfolioItems[itemIndex].querySelector(
    ".portfolio-item-details"
  ).innerHTML;
  // get the popup project details innerHTML and change to match the details from the current portfolioItem
  popup.querySelector(".pp-project-details").innerHTML = details;
  // get the project title
  const title = portfolioItems[itemIndex].querySelector(
    ".portfolio-item-title"
  ).innerText;
  // console.log(title);
  // grab the popup title and change to the title of portfolio item clicked on
  popup.querySelector(".pp-title h2").innerText = title;
  // get the project category from the data-category attribute
  const category = portfolioItems[itemIndex].getAttribute("data-category");
  // grab the popup category element and change the text
  popup.querySelector(".pp-project-category").innerHTML = category
    .split("-")
    .join(" ");
}

function popupDetailsToggle() {
  if (projectDetailsContainer.classList.contains("active")) {
    projectDetailsBtn.querySelector("i").classList.remove("bx-minus");
    projectDetailsBtn.querySelector("i").classList.add("bx-plus");

    // if already open remove the active class
    projectDetailsContainer.classList.remove("active");
    projectDetailsContainer.style.maxHeight = 0 + "px";
  } else {
    // when details are displayed change the icon on the projectDetailsBtn
    projectDetailsBtn.querySelector("i").classList.remove("bx-plus");
    projectDetailsBtn.querySelector("i").classList.add("bx-minus");
    // add active class to the pp details of popup to display details
    projectDetailsContainer.classList.add("active");
    projectDetailsContainer.style.maxHeight =
      projectDetailsContainer.scrollHeight + "px";
    popup.scrollTo(0, projectDetailsContainer.offsetTop);
    // console.log(projectDetailsContainer.scrollHeight)
  }
}

// ====================== PORTFOLIO FILTER & POPUP ========================

// *** filter portfolio items - Add event listener to filterContainer, add/remove hide class depending on data-target
filterContainer.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("filter-item") &&
    !e.target.classList.contains("active")
  ) {
    // deactive existing filter active item
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new filter item that was clicked on
    e.target.classList.add("active");
    // get data-target value from filter item
    const target = e.target.getAttribute("data-target");

    // iterate over the portfolio items - if the data category matches the target then remove hide class and add show class
    portfolioItems.forEach((item) => {
      if (item.getAttribute("data-category") === target || target === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.add("hide");
        item.classList.remove("show");
      }
    });
  }
});

// *** Add event listener to portfolio items, when clicked on trigger portfolio popup window and slideshow for that specific portfolio item
portfolioItemsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".portfolio-item-inner")) {
    // get parent element of portfolio-item-inner elements (portfolio item div itself)
    const portfolioItem = e.target.closest(
      ".portfolio-item-inner"
    ).parentElement;

    // get portfolio item index by using indexOf on the portfolioItems list
    //Array.from(portfolioItems.children).indexOf(item)
    itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(
      portfolioItem
    );
    console.log(itemIndex);

    // use index to retrieve the specific image element and get the data-screenshots attribute
    // screenshots = portfolioItem.querySelector(".portfolio-item-img")
    screenshots = portfolioItems[itemIndex]
      .querySelector(".portfolio-item-img img")
      .getAttribute("data-screenshots");
    // convert strings of screenshots into an array of strings
    screenshots = screenshots.split(",");
    // set slideIndex to 0 - displays first image in screenshots array
    slideIndex = 0;
    // if screenshots only has 1 element, remove buttons
    if (screenshots.length === 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
    // toggle popup to open
    popupToggle();
    // popup image slideshow - change source of popup image
    popupSlideshow();
    // display portfolio details
    popupDetails();
  }
});

// ** Add Event listener to close button in portfolio popup
closeBtn.addEventListener("click", () => {
  // toggle off the popup
  popupToggle();
  if (projectDetailsContainer.classList.contains("active")) {
    popupDetailsToggle();
  }
});

// Next slide image
nextBtn.addEventListener("click", () => {
  // if slideIndex is equal to index of last screenshot in the array, revert back to 0 index
  if (slideIndex === screenshots.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  // call popupSlideShow which will change the popupImg source to match the slide index
  popupSlideshow();
  console.log(`slideIndex: ${slideIndex}`);
});

// Previous image
prevBtn.addEventListener("click", () => {
  if (slideIndex === 0) {
    slideIndex = screenshots.length - 1;
  } else {
    slideIndex--;
  }
  popupSlideshow();
  console.log(`slideIndex: ${slideIndex}`);
});

// ** Add event listener to popup details button
projectDetailsBtn.addEventListener("click", () => {
  popupDetailsToggle();
});
