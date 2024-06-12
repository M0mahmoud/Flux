document.addEventListener("DOMContentLoaded", function () {
  // AOS Animations
  AOS.init();
  // Mobile Menu
  let menuButton = document.querySelector(".menu-button");
  let body = document.querySelector("body");
  let navMenuWrapper = document.querySelector(".nav-menu-wrapper-mobile");
  let navMenu = document.querySelector(".nav-menu-s");
  let navLinks = document.querySelectorAll(".nav-link-mobile");

  menuButton.addEventListener("click", function () {
    body.classList.toggle("hidden");
    navMenuWrapper.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLinks.forEach(function (link) {
      link.classList.toggle("active");
    });
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Close the menu overlay
      body.classList.remove("hidden");
      navMenuWrapper.classList.remove("active");
      navMenu.classList.remove("active");
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
    });
  });

  // Slider
  const testimonials = document.querySelector(".testimonials");
  const prevButton = document.querySelector(".slider-button.prev");
  const nextButton = document.querySelector(".slider-button.next");

  let currentIndex = 0;

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.children.length - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < testimonials.children.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });

  function updateSlider() {
    const offset = -currentIndex * 100;
    testimonials.style.transform = `translateX(${offset}%)`;
  }
});
