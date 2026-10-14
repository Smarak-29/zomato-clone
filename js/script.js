document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("main input");

  // Animate placeholder typing effect
  const placeholders = [
    "Search for restaurants...",
    "Search for cuisines...",
    "Search for dishes..."
  ];
  let index = 0;

  setInterval(() => {
    input.setAttribute("placeholder", placeholders[index]);
    index = (index + 1) % placeholders.length;
  }, 3000);

  // Smooth scroll effect for nav links
  document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  });

  // Input glow animation on typing
  input.addEventListener("input", () => {
    input.style.boxShadow = "0 0 15px rgba(226, 55, 68, 0.9)";
    setTimeout(() => {
      input.style.boxShadow = "none";
    }, 500);
  });
});
