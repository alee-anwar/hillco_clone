// WELCOME POPUP
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("welcomePopup");
  const closeButton = document.getElementById("closePopup");

  function hidePopup() {
    popup.style.display = "none";
    localStorage.setItem("popupHiddenTimestamp", Date.now());
  }

  closeButton.addEventListener("click", hidePopup);

  // Check if popup was hidden in the last 24 hours and show it accordingly
  const lastHiddenTimestamp = localStorage.getItem("popupHiddenTimestamp");

  const timeDifference = Date.now() - lastHiddenTimestamp;
  // console.log(`Time Left to Show Popup ${86400000 - timeDifference}s`)

  if (!lastHiddenTimestamp || timeDifference >= 24 * 60 * 60 * 1000) {
    setTimeout(function () {
      popup.style.display = "block";
    }, 5000);
  }
});

// drawer
// Wait for the image to load
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
  pageOverlay.classList.add("is-visible");
  pageOverlay.style.zIndex = "21";
  searchDropdown.classList.remove("search_down");
  document.body.classList.toggle("no-scroll");

  console.log("page overlay block");
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("drawer").classList.remove("open");
  document
    .getElementById("drawer-footer-animation")
    .classList.remove("drawer-up");
  document.getElementById("drawer").setAttribute("aria-hidden", "true");
  pageOverlay.classList.remove("is-visible");
  pageOverlay.style.zIndex = "10";
  document.body.classList.remove("no-scroll");

  console.log("page overlay none");
});

// minus plus
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
// const pageOverlay = document.querySelector(".PageOverlay");

searchIcon.addEventListener("click", function (event) {
  event.preventDefault();

  if (!pageOverlay.classList.contains("is-visible")) {
    // pageOverlay.style.zIndex = "5";
    pageOverlay.classList.add("is-visible");
    searchDropdown.classList.add("search_down");
    searchDropdown.setAttribute("tabindex", "-1");
    // pageOverlay.style.opacity = "0.5";
  } else {
    searchDropdown.classList.remove("search_down");
    searchDropdown.removeAttribute("tabindex");
    pageOverlay.classList.remove("is-visible");
    // pageOverlay.style.zIndex = "20";
    // pageOverlay.style.opacity = "0";
  }
});

searchIconPhone.addEventListener("click", function (event) {
  event.preventDefault();

  if (!pageOverlay.classList.contains("is-visible")) {
    pageOverlay.classList.add("is-visible");
    // pageOverlay.style.zIndex = "5";
    searchDropdown.classList.add("search_down");
    searchDropdown.setAttribute("tabindex", "-1");
    // pageOverlay.style.opacity = "0.5";
  } else {
    searchDropdown.classList.remove("search_down");
    searchDropdown.removeAttribute("tabindex");
    pageOverlay.classList.remove("is-visible");
    // pageOverlay.style.zIndex = "20";
    // pageOverlay.style.opacity = "0";
  }
});

closeSearchButton.addEventListener("click", function (event) {
  event.preventDefault();

  searchDropdown.classList.remove("search_down");
  pageOverlay.classList.remove("is-visible");
  // pageOverlay.style.zIndex = "20";
  // pageOverlay.style.opacity = "0";
});

pageOverlay.addEventListener("click", function () {
  if (!searchDropdown.classList.contains("search_down")) {
    document.getElementById("drawer").classList.remove("open");
    document
      .getElementById("drawer-footer-animation")
      .classList.remove("drawer-up");
    document.getElementById("drawer").setAttribute("aria-hidden", "true");
    pageOverlay.classList.remove("is-visible");
    pageOverlay.style.zIndex = "10";
  }
});
