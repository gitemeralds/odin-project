//DOM elements and variables
let grid_container = document.createElement("div");
document.body.appendChild(grid_container);
let grid_size = 5;
//Classes
grid_container.classList.add("gridContainer");
//functions
changeColorToBlack = (element) => {
  element.style.backgroundColor = "black";
};

for (let current_row = grid_size; current_row > 0; current_row--) {
  let row = document.createElement("div");
  row.classList.add("row", "row" + current_row);
  grid_container.appendChild(row);
  for (let current_col = grid_size; current_col > 0; current_col--) {
    let col = document.createElement("div");
    col.classList.add("column", "column" + current_col);
    row.appendChild(col);
  }
}
let mouseIsDown = false;
let columns = document.getElementsByClassName("column");

for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener("mousedown", (e) => {
    mouseIsDown = true;
    changeColorToBlack(columns[i]);
    e.preventDefault();
  });
}

for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener("mouseenter", (e) => {
    if (mouseIsDown) {
      changeColorToBlack(columns[i]);
      e.preventDefault();
    }
  });
}

document.addEventListener("mouseup", () => {
  mouseIsDown = false;
});
