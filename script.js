
document.addEventListener("DOMContentLoaded", () => {
  // Show the popup after 1 second
  setTimeout(() => {
      document.getElementById("popup").style.display = "flex";
  }, 500);

  // Hide the popup when clicking outside of it
  document.addEventListener("click", (event) => {
      const popup = document.getElementById("popup");
      const popupContent = document.querySelector(".popup-content");
      
      if (popup.style.display === "flex" && !popupContent.contains(event.target)) {
          popup.style.display = "none";
      }
  });

  // Intersection Observer for images and quotes
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              // Stop observing the element after it becomes visible
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Target all images and quotes for the observer
  document.querySelectorAll('.images img, .quotes blockquote').forEach(element => {
      observer.observe(element);
  });
});
