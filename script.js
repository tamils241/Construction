document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const loader = document.getElementById("loader");
  const header = document.querySelector(".header");
  const contactForm = document.querySelector(".contact-form");

  const headerImages = [
    "asset/work.webp",
    "asset/work1.webp",
    "asset/work2.webp",
    "asset/construction.webp",
    "asset/architecture.webp"
  ];

  let currentImage = 0;

  const hideLoader = () => {
    if (loader) {
      loader.classList.add("hide");
    }
  };

  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // Run animation only once
      observer.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.2
});

document
  .querySelectorAll(".hidden-left, .hidden-right, .hidden-up")
  .forEach((el) => observer.observe(el));

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.reset();
    });
  }

  setTimeout(hideLoader, 700);
  window.addEventListener("load", hideLoader);

  if (header) {
    setInterval(() => {
      currentImage = (currentImage + 1) % headerImages.length;

      header.style.backgroundImage = `
        linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
        url("${headerImages[currentImage]}")
      `;
    }, 3000);
  }
});
