// Add smooth scrolling and interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in animation for text content
  const textContent = document.querySelector(".text-content");
  const imageContent = document.querySelector(".image-content");

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Initial setup for animations
  if (textContent) {
    textContent.style.opacity = "0";
    textContent.style.transform = "translateY(30px)";
    textContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(textContent);
  }

  if (imageContent) {
    imageContent.style.opacity = "0";
    imageContent.style.transform = "translateX(30px)";
    imageContent.style.transition = "opacity 1s ease, transform 1s ease";
    observer.observe(imageContent);
  }

  // Add hover effect to header text
  const aboutText = document.querySelector(".about-text");
  const companyText = document.querySelector(".company-text");

  if (aboutText) {
    aboutText.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#c53030";
      this.style.transition = "background-color 0.3s ease";
    });

    aboutText.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#e53e3e";
    });
  }

  if (companyText) {
    companyText.addEventListener("mouseenter", function () {
      this.style.color = "#e53e3e";
      this.style.transition = "color 0.3s ease";
    });

    companyText.addEventListener("mouseleave", function () {
      this.style.color = "#333";
    });
  }

  // Parallax effect for image on scroll (desktop only)
  if (window.innerWidth > 768) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const parallaxElement = document.querySelector(".scaffolding-image");

      if (parallaxElement) {
        const speed = scrolled * 0.5;
        parallaxElement.style.transform = `translateY(${speed}px)`;
      }
    });
  }

  // Handle window resize
  window.addEventListener("resize", function () {
    // Reset parallax on mobile
    if (window.innerWidth <= 768) {
      const parallaxElement = document.querySelector(".scaffolding-image");
      if (parallaxElement) {
        parallaxElement.style.transform = "translateY(0)";
      }
    }
  });
});
