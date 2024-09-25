function createGrid(size) {
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

  const gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((gridElement) => {
    console.log(gridElementSize);
    // gridElement.style.cssText = `width: ${gridElementSize}; height: ${gridElementSize};`;
    gridElement.style.width = gridElementSize;
    gridElement.style.height = gridElementSize;
  });
}

createGrid(30);
