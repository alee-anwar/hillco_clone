window.addEventListener("load", function () {
  const image = document.getElementById("animated-image");
  image.classList.add("show-image");
});
window.addEventListener("load", function () {
  const image = document.getElementById("bee-animated-image");
  image.classList.add("show-image");
});

// Wait for the image to load
window.addEventListener("load", function () {
  const productImages = document.querySelectorAll(".product-image img");
  productImages.forEach((image) => {
    image.addEventListener("load", function () {
      this.classList.add("loaded");
    });
  });
});

const pageOverlay = document.querySelector(".PageOverlay");

document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("drawer").classList.toggle("open");
  document
    .getElementById("drawer-footer-animation")
    .classList.toggle("drawer-up");
  document.getElementById("drawer").setAttribute("aria-hidden", "false");
  pageOverlay.style.display = "block";
  console.log("page overlay block");
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("drawer").classList.remove("open");
  document
    .getElementById("drawer-footer-animation")
    .classList.remove("drawer-up");
  document.getElementById("drawer").setAttribute("aria-hidden", "true");
  pageOverlay.style.display = "none";
  console.log("page overlay none");
});

//plus minus
const dropdownIcon = document.querySelector(".shop-header");
const dropdownMenu = document.querySelector(".drawer-dropdown");
const dropdownPlus = document.querySelector(".Collapsible__Plus");

dropdownIcon.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show-dropdown");
  dropdownPlus.classList.toggle("minus");
});

// search
const searchIcon = document.getElementById("search-click");

const searchIconPhone = document.getElementById("phone-search-click");

const searchDropdown = document.querySelector(".SearchDropdown");

const closeSearchButton = document.getElementById("Search__Close");

searchIcon.addEventListener("click", function (event) {
  event.preventDefault();

  if (pageOverlay.style.display === "none") {
    // searchDropdown.style.visibility = "visible";
    pageOverlay.style.display = "block";
    pageOverlay.style.zIndex = "5";
    searchDropdown.classList.add("search_down");
    searchDropdown.setAttribute("tabindex", "-1");

    console.log(searchDropdown.style.visibility);
  } else {
    // searchDropdown.style.visibility = "hidden";
    searchDropdown.classList.remove("search_down");
    searchDropdown.removeAttribute("tabindex");
    pageOverlay.style.display = "none";
    pageOverlay.style.zIndex = "20";

    console.log(pageOverlay.style.display);
  }
});

searchIconPhone.addEventListener("click", function (event) {
  event.preventDefault();

  if (pageOverlay.style.display === "none") {
    // searchDropdown.style.visibility = "visible";
    pageOverlay.style.display = "block";
    pageOverlay.style.zIndex = "5";
    searchDropdown.classList.add("search_down");
    searchDropdown.setAttribute("tabindex", "-1");

    console.log(pageOverlay.style.display);
  } else {
    searchDropdown.classList.remove("search_down");
    searchDropdown.removeAttribute("tabindex");
    pageOverlay.style.display = "none";
    pageOverlay.style.zIndex = "20";

    console.log(pageOverlay.style.display);
  }
});

closeSearchButton.addEventListener("click", function (event) {
  event.preventDefault();

  // searchDropdown.style.visibility = "hidden";
  searchDropdown.classList.remove("search_down");
  searchDropdown.removeAttribute("tabindex");
  pageOverlay.style.display = "none";
  pageOverlay.style.zIndex = "20";

  console.log(pageOverlay.style.display);
});
