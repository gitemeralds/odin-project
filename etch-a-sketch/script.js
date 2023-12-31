//DOM elements and variables
let grid_container = document.createElement("div");
document.body.appendChild(grid_container);
let grid_size = 100;
//Classes
grid_container.classList.add("gridContainer");

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
