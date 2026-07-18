function renderDotGrid(element, cells) {
  const marked = new Set(cells);
  element.innerHTML = "";
  for (let position = 1; position <= 9; position += 1) {
    const dot = document.createElement("span");
    dot.className = "dot-grid-dot" + (marked.has(position) ? " is-marked" : "");
    element.appendChild(dot);
  }
}

for (const grid of document.querySelectorAll(".dot-grid[data-cells]")) {
  renderDotGrid(grid, grid.dataset.cells.split(",").map(Number));
}
