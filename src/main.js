// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const menuButton = document.getElementById("menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active"); // Use 'add' to ensure it's visible
  });

  closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

// Parallax effect for mobile
const parallaxSections = document.querySelectorAll(
  ".parallax-hero, .parallax-section",
);
window.addEventListener("scroll", () => {
  parallaxSections.forEach((section) => {
    const speed = -0.3; // Adjust parallax speed
    const yPos = window.pageYOffset - section.offsetTop;
    const yPosWithSpeed = yPos * speed;
    section.style.backgroundPosition = `center ${yPosWithSpeed}px`;
  });
});
