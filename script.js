const container = document.querySelector("#container");

function createGrid(size) {
  size = size || 16;
  const container = document.querySelector("#container");
  const gridElementSize = `${600 / size - 2}px`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.addEventListener("mouseover", () => {
      gridElement.classList.add("colored");
    });
    gridElement.style.width = gridElementSize;
    gridElement.style.height = gridElementSize;

    container.appendChild(gridElement);
  }
}

function resetGame() {
  container.replaceChildren();
  const size = prompt("Enter the size of the grid");
  console.log(size);
  createGrid(Number.parseInt(size));
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGame);

createGrid(16);
