const gridContainer = document.getElementById("grid-container");
const gridSizeInput = document.getElementById("grid-size-input");
const generateGridButton = document.getElementById("generate-grid-btn");
const warningMessage = document.getElementById("warning-message");

// Function to create a grid based on size
function createGrid(size) {
  // Clear the existing grid
  gridContainer.innerHTML = "";

  // Set the grid container to have the correct number of rows and columns
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 25px)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 25px)`;

  // Create grid squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    gridContainer.appendChild(square);
  }
}

// Event listener for button
generateGridButton.addEventListener("click", () => {
  const gridSize = parseInt(gridSizeInput.value, 10);

  // Validate grid size input
  if (gridSize && gridSize > 0 && gridSize <= 50) {
    createGrid(gridSize);
    gridSizeInput.value = ""; // Reset input
    warningMessage.classList.add("hidden"); // Hide warning message
  } else {
    // Show warning message
    warningMessage.textContent = "Please enter a valid grid size between 1 and 50.";
    warningMessage.classList.remove("hidden");
  }
});