// Get the elements from the page
const thumbnails = document.querySelectorAll(".thumb");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.getElementById("close");

// Remember which picture was clicked, so focus can go back to it when we close
let lastClicked = null;

// Show the preview with the clicked image
function openLightbox(thumb) {
  const image = thumb.querySelector("img");

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;

  lightbox.hidden = false;                    // show the hidden preview
  document.body.classList.add("no-scroll");   // stop the page behind from scrolling
  closeButton.focus();

  lastClicked = thumb;
}

// Hide the preview again
function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("no-scroll");

  if (lastClicked) {
    lastClicked.focus();
  }
}

// Every picture opens the preview when clicked
thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    openLightbox(thumb);
  });
});

// Three ways to close: the close button, a click on the dark background, the Escape key
closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});