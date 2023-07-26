const slideshowNavImages = document.querySelectorAll(".Product__SlideshowNavImage");

slideshowNavImages.forEach(function(image) {
  image.addEventListener("click", function() {
    this.classList.toggle("is-selected");
  });
});
