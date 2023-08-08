const navImages = document.querySelectorAll(".navImage");
const productSpaces = document.querySelectorAll(".productSpace");

const reviewButton = document.querySelector(".ReviewButton");
const sprContent = document.querySelector(".spr-content");

// const firstProductImage = document.getElementById("Media31932391489791");
const secondProductImage = document.getElementById("Media31932391555327");

// const secondProduct = document.getElementById("Media31932391555327")

// ***************

const dropdownToggleBtn = document.getElementById("dropdownToggleBtn");
const optionsList = document.getElementById("optionsList");
const bottomDrawer = document.getElementById("bottomDrawer");
const closeButton = document.getElementById("Popover__Close-id");
const pageOverlay = document.querySelector(".PageOverlay");

const viewportWidth = window.innerWidth;

const tabletMobileBreakpoint = 1007;

const isTabletMobile = viewportWidth <= tabletMobileBreakpoint;

// ------------------Bottom Drawer------------------------
dropdownToggleBtn.addEventListener("click", function () {
  // Toggle the display of the options list
  if (isTabletMobile) {
    // For tablet/mobile screens, show the bottom drawer
    bottomDrawer.classList.add("drawer-open");
    pageOverlay.style.display = "block";
    pageOverlay.style.zIndex = "30";
  } else {
    // For laptop/desktop screens, hide the bottom drawer
    bottomDrawer.classList.remove("drawer-open");

    console.log("view port width" + viewportWidth);
    const isExpanded =
      dropdownToggleBtn.getAttribute("aria-expanded") === "true";
    dropdownToggleBtn.setAttribute("aria-expanded", !isExpanded);
    optionsList.style.display = isExpanded ? "none" : "block";
  }
});

closeButton.addEventListener("click", () => {
  bottomDrawer.classList.remove("drawer-open");
  pageOverlay.style.display = "none";
  pageOverlay.style.zIndex = "10";
});

const drawerItems = document.querySelectorAll(".Popover__Value");
drawerItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Update the selected value and close the options list
    const selectedValue = item.getAttribute("data-value");
    dropdownToggleBtn.querySelector(".ProductForm__SelectedValue").textContent =
      selectedValue;
    // dropdownToggleBtn.setAttribute("aria-expanded", "false");
    bottomDrawer.classList.remove("drawer-open");
    // pageOverlay.style.display = "block";
    // pageOverlay.style.zIndex = "30";
    pageOverlay.style.display = "none";
    pageOverlay.style.zIndex = "10";
  });
});

pageOverlay.addEventListener("click", function () {
  bottomDrawer.classList.remove("drawer-open");
  pageOverlay.style.display = "none";
  searchDropdown.style.visibility = "hidden";
  pageOverlay.style.zIndex = "10";
});

// ----------------------------End----------------------------------

// ------------------------Option List------------------------------

const optionItems = document.querySelectorAll(".ProductForm__OptionItem");
// const optionItems = document.querySelectorAll(".ProductForm__Item");

optionItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Update the selected value and close the options list
    const selectedValue = item.getAttribute("data-value");
    dropdownToggleBtn.querySelector(".ProductForm__SelectedValue").textContent =
      selectedValue;
    dropdownToggleBtn.setAttribute("aria-expanded", "false");
    optionsList.style.display = "none";
    pageOverlay.style.zIndex = "10";
  });
});

// function hideOptionsList() {
//   //   console.log("status" + optionsList.style.display);
//   if (optionsList.style.display == "block") {
//     optionsList.style.display = "none";
//   }
// }

// // // Event listener to detect clicks on the body
// document.body.addEventListener("click", hideOptionsList);

function hideOptionsList(event) {
  if (
    !optionsList.contains(event.target) &&
    event.target !== dropdownToggleBtn &&
    optionsList.style.display === "block"
  ) {
    optionsList.style.display = "none";
    dropdownToggleBtn.setAttribute("aria-expanded", "false");
  }
}

// Event listener to detect clicks on the body and close the optionsList if needed
document.body.addEventListener("click", hideOptionsList);

// ----------------------------End----------------------------------

// ---------------------Review Button--------------------------
reviewButton.addEventListener("click", function () {
  // Toggle the display of sprContent and the reviewButton
  if (sprContent.style.display === "none" || sprContent.style.display === "") {
    sprContent.style.display = "block";
    reviewButton.style.display = "none";
  } else {
    sprContent.style.display = "none";
    reviewButton.style.display = "block";
  }
});

// ---------------------Image Border--------------------------

navImages.forEach((navImage) => {
  navImage.addEventListener("click", function () {
    // Remove .is-selected class from all nav images
    navImages.forEach((img) => img.classList.remove("is-selected"));

    // Add .is-selected class to the clicked nav image
    this.classList.add("is-selected");

    productSpaces.forEach((space) => space.classList.remove("addSpace"));

    secondProductImage.classList.toggle("addSpace");

    // Toggle the active state
    // isFirstProductActive = !isFirstProductActive;

    // Toggle the active state
  });
});

// header
document.getElementById("menu-button").addEventListener("click", function () {
  pageOverlay.style.display = "block";
  pageOverlay.style.zIndex = "21";
  document.getElementById("drawer").classList.toggle("open");
  // document.querySelector(".menu-icon").classList.toggle("open");
});

document.getElementById("close-button").addEventListener("click", function () {
  pageOverlay.style.display = "none";
  pageOverlay.style.zIndex = "10";
  document.getElementById("drawer").classList.remove("open");
  // document.querySelector(".menu-icon").classList.remove("open");
});

//plus minu
const dropdownIcon = document.querySelector(".dropdown-icon");
// const dropdownIcon = document.querySelector(".shop-header");
const dropdownMenu = document.querySelector(".drawer-dropdown");

dropdownIcon.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show-dropdown");

  if (dropdownMenu.classList.contains("show-dropdown")) {
    dropdownIcon.classList.remove("fa-plus");
    dropdownIcon.classList.add("fa-minus");
  } else {
    dropdownIcon.classList.remove("fa-minus");
    dropdownIcon.classList.add("fa-plus");
  }
});

// search
const searchIcon = document.getElementById("search-click");

const searchIconPhone = document.getElementById("phone-search-click");

const searchDropdown = document.querySelector(".SearchDropdown");

const closeSearchButton = document.getElementById("Search__Close");

searchIcon.addEventListener("click", function (event) {
  event.preventDefault();

  searchDropdown.style.visibility = "visible";
  pageOverlay.style.display = "block";

  console.log(searchDropdown.style.visibility);
});

searchIconPhone.addEventListener("click", function (event) {
  event.preventDefault();

  searchDropdown.style.visibility = "visible";
  pageOverlay.style.display = "block";

  console.log(pageOverlay.style.display);
});

closeSearchButton.addEventListener("click", function (event) {
  event.preventDefault();

  searchDropdown.style.visibility = "hidden";
  pageOverlay.style.display = "none";

  console.log(pageOverlay.style.display);
});
