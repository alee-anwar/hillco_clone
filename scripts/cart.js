// header
document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("drawer").classList.toggle("open");
  document.querySelector(".menu-icon").classList.toggle("open");
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("drawer").classList.remove("open");
  document.querySelector(".menu-icon").classList.remove("open");
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
