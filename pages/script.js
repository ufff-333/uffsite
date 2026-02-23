console.log("Hello from script.js!");

const title = document.getElementById("title");

title.style.cursor = "pointer"; // shows it's clickable

title.addEventListener("click", function () {
  location.reload();
});
