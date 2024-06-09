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

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const movieItems = document.querySelectorAll(".movie-item");
  let searchResults = [];
  let currentIndex = -1;

  searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();  // Prevent form submission if the search box is inside a form
      const query = searchBox.value.toLowerCase();

      // Reset search results and current index if the query changes
      if (currentIndex === -1 || searchResults.length === 0 || !searchResults[currentIndex].query.includes(query)) {
        searchResults = [];
        currentIndex = -1;
        movieItems.forEach((item) => {
          const title = item.querySelector(".movie-description h2").textContent.toLowerCase();
          const description = item.querySelector(".movie-description p").textContent.toLowerCase();

          if (title.includes(query) || description.includes(query)) {
            searchResults.push({ item, query });
          }
        });

        // Display alert if no results found
        if (searchResults.length === 0) {
          alert("No results found. Please check your search query.");
        }
      }

      // Increment index and loop back if necessary
      currentIndex = (currentIndex + 1) % searchResults.length;

      if (searchResults.length > 0) {
        const { item } = searchResults[currentIndex];
        item.scrollIntoView({ behavior: 'smooth', block: 'start' });
        item.style.border = "2px solid yellow"; // Highlight the found item
        setTimeout(() => item.style.border = "", 2000); // Remove highlight after 2 seconds
      }
    }
  });
});