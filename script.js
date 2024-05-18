document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".button")) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});
