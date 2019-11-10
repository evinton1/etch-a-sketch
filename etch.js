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
  
  let colorBoard = function(colorValue) {
    container.style.gridTemplateColumns = `repeat(${colorValue}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${colorValue}, 1fr)`;
    for (let j = 0; j < colorValue * colorValue; j++) {
      clrBoard = document.createElement("div");
      clrBoard.className = "clrboard";
      clrBoard.id = "clrpixel" + j;
      container.appendChild(clrBoard);
      let mouseColor = function() {
      let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("clrpixel" + j).style.backgroundColor = bgColor;
      };
      clrBoard.addEventListener("mouseenter", mouseColor);
    }
  };
  
  function removeBoard() {
    container.innerHTML = "";
  }
  
  let reset = document.getElementById("reset");
  reset.addEventListener("click", function(e) {
    removeBoard();
    createBoard(parseFloat(prompt("Enter a Value", "0")));
  });
  
  let color = document.getElementById("bckgColor");
  color.addEventListener("click", function(e) {
    removeBoard();
    colorBoard(parseFloat(prompt("Enter a Value", "0")));
  });
  
  let clear = document.getElementById("clear");
  clear.addEventListener("click", function(e) {
    removeBoard();
    createBoard(40);
  });
  
  //FIGURED OUT RANDO COLOR WOO! Only googled to make sure 256 and exact syntax. Good job.
  
  //figure out increment color, try to figure out on own without much help, you got this
