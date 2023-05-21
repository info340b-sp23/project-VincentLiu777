// Select all the rows of stars and store them in an array called "starRows"
const starRows = Array.from(document.querySelectorAll(".stars"));

// Loop through the "starRows" array
starRows.forEach(row => {
  // Select all the stars in the current row and store them in a NodeList called "stars"
  const stars = row.querySelectorAll("i");
  
  // Loop through the "stars" NodeList for the current row
  stars.forEach((star, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
      // Loop through the "stars" NodeList for the current row
      stars.forEach((star, index2) => {
        // Add the "active" class to the clicked star and any stars with a lower index
        // and remove the "active" class from any stars with a higher index
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
  });
});