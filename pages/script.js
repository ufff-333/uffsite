console.log("Hello from script.js!");

document.addEventListener("DOMContentLoaded", function () {

  const title = document.getElementById("title");
  const title2 = document.getElementById("title2");

  if (title) {
    title.style.cursor = "pointer";

    title.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      document.body.classList.add("flash");

      setTimeout(() => {
        document.body.classList.remove("flash");
      }, 300);
    });
  }

  if (title2) {
    title2.style.cursor = "pointer";

    title2.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      document.body.classList.add("flash");

      setTimeout(() => {
        document.body.classList.remove("flash");
      }, 300);
    });
  }

});
