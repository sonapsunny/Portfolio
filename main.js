// main.js
// Get all anchor links
const anchors = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each anchor
anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Smooth scrolling using scrollIntoView with behavior: 'smooth'
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));
