const navToggle = document.querySelector(".navig-toggle");
const navMenu = document.querySelector(".navig-menu");

// Toggle menu on button click
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInside =
    navToggle.contains(event.target) || navMenu.contains(event.target);

  if (!isClickInside && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  }
});

// Add smooth transition to the menu for better UX
navMenu.style.transition = "max-height 0.3s ease-out, opacity 0.3s ease-out";

// Initially hide the menu for smooth slide down
navMenu.style.maxHeight = "0";
navMenu.style.overflow = "hidden";
navMenu.style.opacity = "0";

// Adjust menu visibility with a smoother effect
const observer = new MutationObserver(() => {
  if (navMenu.classList.contains("active")) {
    navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
    navMenu.style.opacity = "1";
  } else {
    navMenu.style.maxHeight = "0";
    navMenu.style.opacity = "0";
  }
});

observer.observe(navMenu, { attributes: true, attributeFilter: ["class"] });
