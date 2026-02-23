console.log("Hello from script.js!");

document.addEventListener("DOMContentLoaded", function () {

  const title = document.getElementById("title");

  // Make it look clickable
  title.style.cursor = "pointer";

  title.addEventListener("click", function () {

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Add flash effect
    document.body.classList.add("flash");

    setTimeout(() => {
      document.body.classList.remove("flash");
    }, 300);

  });

});
