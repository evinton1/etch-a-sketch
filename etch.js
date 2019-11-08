let createBoard = function(value) {
  container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  for (let i = 0; i < value * value; i++) {
    board = document.createElement("div");
    board.className = "board";
    board.id = "pixel" + i;
    container.appendChild(board);
    let mouseEnter = function() {
      document.getElementById("pixel" + i).style.backgroundColor = "black";
    };
    board.addEventListener("mouseenter", mouseEnter);
  }
};

createBoard(40);

function removeBoard() {
  container.innerHTML = "";
}

let reset = document.getElementById("reset");
reset.addEventListener("click", function(e) {
  removeBoard();
  createBoard(parseFloat(prompt("Enter a Value", "0")));
});
