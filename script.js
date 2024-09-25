const container = document.querySelector("#container");

function createGrid(size) {
  size = size || 16;
  size = size > 100 ? 100 : size;

  const container = document.querySelector("#container");
  const gridElementSize = `${600 / size - 2}px`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.style.width = gridElementSize;
    gridElement.style.height = gridElementSize;

    gridElement.addEventListener("mouseover", () => {
      [...container.children].forEach(darken);
      color(gridElement);
    });

    container.appendChild(gridElement);
  }
}

function color(gridElement) {
  const hueValue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${hueValue}, 100%, 65%)`;
  gridElement.style.backgroundColor = randomColor;
  gridElement.style.opacity = "100%";
}

function darken(gridElement) {
  console.log("darken");
  gridElement.style.opacity = `${Number.parseFloat(gridElement.style.opacity) - 0.05}`;
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
