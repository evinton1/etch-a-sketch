let value = 20;

function createBoard(value){
  for (let i = 0; i < (value * value); i++) {
  board = document.createElement("div");
  board.className = "board";
  board.id = "pixel" + i;
  container.appendChild(board);
  let mouseEnter = function() {
    document.getElementById("pixel" + i).style.backgroundColor = "blue";
  };
  board.addEventListener("mouseenter", mouseEnter);
}
} 

let reset = document.getElementById("reset");
reset.addEventListener("click", function(e) {
  alert("hello");
  value = prompt();
  createBoard(value);
});

let root = document.querySelector("container");
container.style.setProperty("--colNum", value);
container.style.setProperty("--rowNum", createBoard(value));
