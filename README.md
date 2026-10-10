# Image Gallery

A responsive image gallery with a simple preview (lightbox). Clicking a picture opens it in a larger view with a close button. Built for Task 9 (Image Gallery) of my Web Development internship.

**Live page:** https://cedrick40.github.io/image-gallery/

## About the project

The page shows 8 pictures in a grid that adjusts to the screen size. Clicking any picture opens a dark overlay with the large image and its description. The overlay can be closed with the close button, by clicking the dark background, or by pressing the Escape key.

## Objective

To practice CSS Grid, responsive layouts, JavaScript click events, and basic UI interaction.

## Tools used

- HTML5
- CSS3
- JavaScript
- VS Code
- Git and GitHub (free)

## Features

- Responsive image grid built with CSS Grid (8 images)
- A clickable preview (lightbox) that shows the large image and its caption
- A visible close button, plus closing with the Escape key or a click on the background
- Alt text on every image
- Zoom effect when hovering over a picture
- Pictures are buttons, so the gallery works with the keyboard (Tab to move, Enter to open)
- The page behind the preview stops scrolling while it is open, and keyboard focus returns to the picture that was clicked when it closes
- Two columns on phones, and more columns on wider screens

## How it works

1. **Grid:** `.gallery` uses `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))`, so the number of columns changes with the screen width. A media query sets two columns on small screens.
2. **Same-size pictures:** `aspect-ratio: 4 / 3` and `object-fit: cover` make every picture the same shape without stretching it.
3. **Hidden modal:** the preview is a `div` with the `hidden` attribute. The CSS rule `.lightbox[hidden] { display: none; }` makes sure `display: flex` does not override it.
4. **Opening:** each picture has a click listener. `openLightbox()` copies the picture's `src` and `alt` into the large image and caption, sets `lightbox.hidden = false`, adds a `no-scroll` class to the page, and moves focus to the close button.
5. **Closing:** `closeLightbox()` sets `lightbox.hidden = true`, removes `no-scroll`, and returns focus to the picture that was clicked. It runs from the close button, from a click on the background (checked with `event.target === lightbox`), and from the Escape key (`keydown` event).

## Images

The 8 images are simple illustrations made for this project: estevao, msn, messi, chelsea, olise, lamine, mn, and ppr. Each has alt text that describes what it shows.

## Project structure

```
image-gallery/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── estevao.jpeg
│   ├── msn.jpeg
│   ├── messi.jpeg
│   ├── chelsea.jpeg
│   ├── olise.jpeg
│   ├── lamine.jpeg
│   ├── mn.jpeg
│   └── ppr.jpeg
└── README.md
```

## Outcome

A responsive, accessible gallery that meets all the deliverables: a grid of 8 images, a clickable preview, and a close button, plus keyboard support. This task taught me how CSS Grid creates responsive layouts, how to show and hide an element with JavaScript, and why alt text and keyboard access matter.

## Author

Cedrick Niyibikora

- GitHub: https://github.com/Cedrick40
- LinkedIn: https://www.linkedin.com/in/cedrick10