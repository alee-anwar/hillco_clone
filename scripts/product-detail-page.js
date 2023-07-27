const slideshowNavImages = document.querySelectorAll(
  ".Product__SlideshowNavImage"
);

slideshowNavImages.forEach(function (image) {
  image.addEventListener("click", function () {
    this.classList.toggle("is-selected");
  });
});

function handleFlickityAttribute() {
  const mainSlideshow = document.getElementById("mainSlideshow");

  if (window.innerWidth <= 1140) {
    mainSlideshow.setAttribute("data-flickity", "");
  } else {
    mainSlideshow.removeAttribute("data-flickity");
  }
}

// Initial check on page load
handleFlickityAttribute();

// Listen for window resize and update the data-flickity attribute accordingly
window.addEventListener("resize", function () {
  handleFlickityAttribute();
});
