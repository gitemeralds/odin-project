const calculator = document.createElement("div");
document.body.appendChild(calculator);
calculator.classList.add("calculator");
const screen = document.createElement("div");
calculator.appendChild(screen);
screen.classList.add("screen");
const grid = document.createElement("div");
calculator.appendChild(grid);
grid.classList.add("grid");
const row5 = document.createElement("div");
calculator.appendChild(row5);
row5.classList.add("row");
row5.classList.add("row5");
const clearButton = document.createElement("button");
clearButton.classList.add("button");
clearButton.classList.add("clearButton");
row5.appendChild(clearButton);
const equalButton = document.createElement("button");
row5.appendChild(equalButton);
equalButton.classList.add("button");
equalButton.classList.add("equalButton");

for (rows = 4; rows > 0; rows--) {
  let row = document.createElement("div");
  calculator.appendChild(row);
  row.classList.add("row");
  row.classList.add("row" + rows);
  for (buttons = 4; buttons > 0; buttons--) {
    let button = document.createElement("button");
    row.appendChild(button);
    button.classList.add("button");
    button.classList.add("button" + buttons);
  }
}

rows = document.getElementsByClassName("row");
for (let i = 0; i < rows.length; i++) {
  grid.appendChild(rows[i]);
}
