// Function to set the CSS variable for stable viewport height
function setStableViewportHeight() {
  const vh = globalThis.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Set on initial load
setStableViewportHeight();

// Set on resize (with a debounce for performance)
let resizeTimeout;
globalThis.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setStableViewportHeight, 100);
});

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

// Parallax effect
const parallaxImages = document.querySelectorAll(".parallax-bg-image");

const applyParallax = () => {
  parallaxImages.forEach((img) => {
    // Get the parent section of the image
    const section = img.closest("section");
    if (!section) return;

    const viewportHeight = globalThis.innerHeight;
    const scrollY = globalThis.pageYOffset;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if the section is in view
    // Adjust the offset to start parallax earlier/later
    const _parallaxOffset = 0.5; // Controls when the parallax starts/stops relative to section visibility

    const sectionInView =
      sectionTop < scrollY + viewportHeight &&
      sectionTop + sectionHeight > scrollY;

    if (sectionInView) {
      const speed = 0.3; // Adjust parallax speed (0.1 to 0.5 usually works well)
      const scrollY = globalThis.pageYOffset;
      const sectionTop = section.offsetTop;

      // Calculate yOffset such that it moves with the scroll but slower.
      // A positive speed means it moves in the same direction as scroll.
      // Top of the image needs to be offset to cover the full height.
      const yOffset = (scrollY - sectionTop) * speed;

      img.style.transform = `translate3d(0, ${yOffset}px, 0)`;
    } else {
      img.style.transform = `translate3d(0, 0, 0)`;
    }
  });
};

globalThis.addEventListener("scroll", applyParallax);
globalThis.addEventListener("resize", applyParallax); // Re-apply on resize
document.addEventListener("DOMContentLoaded", applyParallax); // Apply on initial load
