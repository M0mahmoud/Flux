document.addEventListener("DOMContentLoaded", async function () {
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
  const isArabic = window.location.pathname.includes("/indexAr.html");
  prevButton.addEventListener("click", () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : testimonials.children.length - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex =
      currentIndex < testimonials.children.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });

  function updateSlider() {
    let offset = -currentIndex * 100;
    if (isArabic) {
      offset *= -1; // Reverse direction for RTL in Arabic
    }
    testimonials.style.transform = `translateX(${offset}%)`;
  }

  // Function to handle form action
  document
    .getElementById("contact-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission

      const form = event.target;
      const formData = new FormData(form);

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyfA48CCo70BuMD3DYGQ_apBGKFuxFzbPG4mQFSuPJOkAIProck3zM0SXqHXMFS_nvT/exec",
          {
            method: "POST",
            body: new URLSearchParams(formData),
          }
        );

        const data = await response.text();
        document.getElementById("responseMessage").innerText = data;
        form.reset();
      } catch (error) {
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = error;
      }
    });
});
