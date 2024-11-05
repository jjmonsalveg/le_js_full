// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  // let thumbnails = document.querySelectorAll("#gallery-thumbs > div >img");
  let thumbnails = document
    .querySelector("#gallery-thumbs")
    .querySelectorAll("img");

  let mainImage = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      // Set clicked image as display image
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageAlt = thumbnail.alt;

      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);
    });
  });
}
