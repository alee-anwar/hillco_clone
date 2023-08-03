// left drawer
document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("drawer").classList.toggle("open");
  // document.querySelector(".menu-icon").classList.toggle("open");
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

const searchIcon = document.getElementById("search-click");
const searchIconPhone = document.getElementById("phone-search-click");
const searchDropdown = document.querySelector(".SearchDropdown");
const pageOverlay = document.querySelector(".PageOverlay");
const closeSearchButton = document.getElementById("Search__Close");

const closeFilterDrawer = document.getElementById("close-filter-drawer");
const openDrawerButton = document.getElementById("button-filter-drawer");
const filterDrawer = document.querySelector(".Drawer--fromRight");

const drawer = document.getElementById("collection-filter-drawer");

const collapsibleButtons = document.querySelectorAll(".Collapsible__Button");

collapsibleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const collapsibleInner = this.nextElementSibling;
    collapsibleInner.classList.toggle("Collapsible__Inner--active");
    this.setAttribute(
      "aria-expanded",
      collapsibleInner.classList.contains("Collapsible__Inner--active")
    );

    // Toggle the plus and minus buttons when the collapsible inner section is active
    const plusSign = this.querySelector(".Collapsible__Plus");
    plusSign.classList.toggle("Collapsible__Plus--hidden", 
        collapsibleInner.classList.contains("Collapsible__Inner--active"));
        
    const minusSign = this.querySelector(".Collapsible__Minus");
    minusSign.classList.toggle("Collapsible__Minus--hidden", 
        !collapsibleInner.classList.contains("Collapsible__Inner--active"));
  });
});


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

// filter drawer
openDrawerButton.addEventListener("click", function (event) {
  event.preventDefault();
  filterDrawer.style.display = "block";
  pageOverlay.style.display = "block";
  drawer.classList.toggle("Drawer--open");
  document.getElementById("result-footer-animation").classList.toggle("drawer-up");
  pageOverlay.style.zIndex = "30";
  // seeResultsButton.classList.add("moved-up");
  console.log("darwer " + filterDrawer.style.display);
  console.log("pageoverlay " + pageOverlay.style.display);
});

closeFilterDrawer.addEventListener("click", function (event) {
  event.preventDefault();
  drawer.classList.add("Drawer--closing");
  setTimeout(function () {
    // seeResultsButton.classList.remove("moved-up");
    filterDrawer.style.display = "none";
    pageOverlay.style.display = "none";
    document.getElementById("result-footer-animation").classList.remove("drawer-up");
    pageOverlay.style.zIndex = "10";
    console.log("drawer " + filterDrawer.style.display);
    console.log("pageoverlay " + pageOverlay.style.display);
    drawer.classList.remove("Drawer--closing");
    drawer.classList.remove("Drawer--open");
    drawer.style.display = "block";
  }, 500);
});
