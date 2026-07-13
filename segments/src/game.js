const SIZE = 4;
const PALETTE = [
  { key: "blue", label: "blue", value: "#58a9d5" },
  { key: "orange", label: "orange", value: "#efbd62" },
  { key: "green", label: "green", value: "#67bda1" },
  { key: "red", label: "red", value: "#d98778" }
];

const state = { board: [], initialBoard: [], moves: 0, complete: false, selectedIndex: null };
const elements = {
  board: document.querySelector("#board"),
  selectionHelp: document.querySelector("#selection-help"),
  connectionStatus: document.querySelector("#connection-status"),
  moveCount: document.querySelector("#move-count"),
  completion: document.querySelector("#completion-message"),
  restart: document.querySelector("#restart-button"),
  newPuzzle: document.querySelector("#new-button"),
  infoButton: document.querySelector("#info-button"),
  infoPanel: document.querySelector("#info-panel")
};

elements.restart.addEventListener("click", restartPuzzle);
elements.newPuzzle.addEventListener("click", newPuzzle);
elements.infoButton.addEventListener("click", toggleInfo);
document.addEventListener("pointerdown", closeInfoOutside, true);
document.addEventListener("keydown", handleKeyDown);
newPuzzle();

function newPuzzle() {
  const solved = makeSolvedBoard();
  let board = solved.slice();
  let previous = "";

  // Puzzles are obtained from a solved board, so the recorded reverse sequence
  // always supplies a route back to a connected layout.
  const folds = 6 + Math.floor(Math.random() * 4);
  for (let turn = 0; turn < folds; turn += 1) {
    let move;
    do {
      move = Math.random() < 0.5
        ? { type: "row", index: Math.floor(Math.random() * SIZE) }
        : { type: "column", index: Math.floor(Math.random() * SIZE) };
    } while (`${move.type}${move.index}` === previous);
    board = applyFold(board, move);
    previous = `${move.type}${move.index}`;
  }

  // Very occasionally a scramble is already connected; draw another one.
  if (isComplete(board)) return newPuzzle();

  state.board = board;
  state.initialBoard = board.slice();
  state.moves = 0;
  state.complete = false;
  state.selectedIndex = null;
  render();
}

function makeSolvedBoard() {
  const colours = shuffle(PALETTE).slice(0, 4);
  const board = Array(SIZE * SIZE);
  // Four 2×2 blocks: a deliberately plain, inspectable connected target.
  for (let row = 0; row < SIZE; row += 1) {
    for (let column = 0; column < SIZE; column += 1) {
      board[row * SIZE + column] = colours[Math.floor(row / 2) * 2 + Math.floor(column / 2)];
    }
  }
  return board;
}

function selectTile(index) {
  if (state.complete) return;
  if (state.selectedIndex === null) {
    state.selectedIndex = index;
    render();
    return;
  }
  if (state.selectedIndex === index) {
    state.selectedIndex = null;
    render();
    return;
  }
  const first = state.selectedIndex;
  const firstRow = Math.floor(first / SIZE), firstColumn = first % SIZE;
  const secondRow = Math.floor(index / SIZE), secondColumn = index % SIZE;
  if (firstRow !== secondRow && firstColumn !== secondColumn) {
    state.selectedIndex = index;
    render();
    return;
  }
  state.board = reverseSegment(state.board, first, index);
  state.moves += 1;
  state.selectedIndex = null;
  state.complete = isComplete(state.board);
  render(true);
}

function applyFold(board, move) {
  const next = board.slice();
  if (move.type === "row") {
    for (let column = 0; column < SIZE; column += 1) next[move.index * SIZE + column] = board[move.index * SIZE + (SIZE - 1 - column)];
  } else {
    for (let row = 0; row < SIZE; row += 1) next[row * SIZE + move.index] = board[(SIZE - 1 - row) * SIZE + move.index];
  }
  return next;
}

function reverseSegment(board, first, second) {
  const next = board.slice();
  const firstRow = Math.floor(first / SIZE), firstColumn = first % SIZE;
  const secondRow = Math.floor(second / SIZE), secondColumn = second % SIZE;
  if (firstRow === secondRow) {
    const start = Math.min(firstColumn, secondColumn), end = Math.max(firstColumn, secondColumn);
    for (let offset = 0; offset <= end - start; offset += 1) next[firstRow * SIZE + start + offset] = board[firstRow * SIZE + end - offset];
  } else {
    const start = Math.min(firstRow, secondRow), end = Math.max(firstRow, secondRow);
    for (let offset = 0; offset <= end - start; offset += 1) next[(start + offset) * SIZE + firstColumn] = board[(end - offset) * SIZE + firstColumn];
  }
  return next;
}

function restartPuzzle() {
  state.board = state.initialBoard.slice();
  state.moves = 0;
  state.complete = false;
  state.selectedIndex = null;
  render();
}

function render(animate = false) {
  if (animate) {
    elements.board.classList.add("is-folding");
    window.setTimeout(() => elements.board.classList.remove("is-folding"), 170);
  }
  const connected = connectedColours(state.board);
  elements.board.replaceChildren(...state.board.map((colour, index) => {
    const tile = document.createElement("button");
    tile.className = `tile${connected.has(colour.key) ? " is-connected" : ""}${state.selectedIndex === index ? " is-selected" : ""}`;
    tile.type = "button";
    tile.style.setProperty("--colour", colour.value);
    tile.setAttribute("aria-label", `${colour.label}, row ${Math.floor(index / SIZE) + 1}, column ${index % SIZE + 1}${state.selectedIndex === index ? ", selected" : ""}${connected.has(colour.key) ? ", connected" : ""}`);
    tile.addEventListener("click", () => selectTile(index));
    return tile;
  }));
  elements.connectionStatus.replaceChildren(...PALETTE.map((colour) => {
    const indicator = document.createElement("span");
    indicator.className = `colour-status${connected.has(colour.key) ? " is-connected" : ""}`;
    indicator.style.setProperty("--colour", colour.value);
    indicator.textContent = colour.label;
    return indicator;
  }));
  elements.moveCount.textContent = `${state.moves} ${state.moves === 1 ? "move" : "moves"}`;
  elements.selectionHelp.textContent = state.complete ? "" : state.selectedIndex === null ? "Select a square" : "Select another square in the same row or column";
  elements.completion.textContent = state.complete ? `Connected in ${state.moves} ${state.moves === 1 ? "move" : "moves"}.` : "";
  elements.completion.classList.toggle("is-complete", state.complete);
}

function connectedColours(board) {
  const connected = new Set();
  for (const colour of PALETTE) {
    const cells = board.map((value, index) => value.key === colour.key ? index : -1).filter((index) => index >= 0);
    if (!cells.length) continue;
    const seen = new Set([cells[0]]);
    const queue = [cells[0]];
    while (queue.length) {
      const current = queue.shift();
      for (const neighbour of orthogonalNeighbours(current)) {
        if (board[neighbour].key === colour.key && !seen.has(neighbour)) { seen.add(neighbour); queue.push(neighbour); }
      }
    }
    if (seen.size === cells.length) connected.add(colour.key);
  }
  return connected;
}

function isComplete(board) { return connectedColours(board).size === PALETTE.length; }
function orthogonalNeighbours(index) {
  const row = Math.floor(index / SIZE), column = index % SIZE, cells = [];
  if (row) cells.push(index - SIZE);
  if (row < SIZE - 1) cells.push(index + SIZE);
  if (column) cells.push(index - 1);
  if (column < SIZE - 1) cells.push(index + 1);
  return cells;
}
function shuffle(items) { return items.slice().sort(() => Math.random() - .5); }

function toggleInfo() {
  const open = elements.infoPanel.hidden;
  elements.infoPanel.hidden = !open;
  elements.infoButton.setAttribute("aria-expanded", String(open));
}
function closeInfoOutside(event) {
  if (!elements.infoPanel.hidden && !elements.infoPanel.contains(event.target) && event.target !== elements.infoButton) {
    elements.infoPanel.hidden = true;
    elements.infoButton.setAttribute("aria-expanded", "false");
  }
}
function handleKeyDown(event) {
  if (event.key.toLowerCase() === "i") toggleInfo();
  if (event.key.toLowerCase() === "r") restartPuzzle();
  if (event.key.toLowerCase() === "n") newPuzzle();
}
