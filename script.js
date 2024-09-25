const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid-element");
  container.appendChild(gridElement);
}
