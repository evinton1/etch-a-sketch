let value = 4;
let board;
let mouseEnter;
let root = document.querySelector("container");
container.style.setProperty("--colNum", value);
container.style.setProperty("--rowNum", createBoard(value));

function createBoard(value){
  for (let i = 0; i < (value * value); i++) {
  board = document.createElement("div");
  board.className = "board";
  board.id = "pixel" + i;
  container.appendChild(board);
  mouseEnter = function() {
  document.getElementById("pixel" + i).style.backgroundColor = "blue";
  };
  board.addEventListener("mouseenter", mouseEnter);
} 
} 


function removeBoard() {
    // Removes an element from the document
  let element = document.querySelector("board");
    element.remove();
}

let reset = document.getElementById("reset");
reset.addEventListener("click", function(e) {
  removeBoard();
  createBoard(parseFloat(prompt("Enter a Value", "0")));
});
