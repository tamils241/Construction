const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const loader = document.getElementById("loader");
const header = document.querySelector(".header");

const headerImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
];

let currentImage = 0;

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    if (loader) {
      loader.classList.add("hide");
    }
  }, 700);
});

setInterval(() => {
  currentImage = (currentImage + 1) % headerImages.length;

  if (header) {
    header.style.backgroundImage = `
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
      url("${headerImages[currentImage]}")
    `;
  }
}, 3000);
