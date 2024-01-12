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

const plusButton = document.querySelector(".row4 .button1");
plusButton.textContent = " + ";
const minusButton = document.querySelector(".row3 .button1");
minusButton.textContent = " - ";
const timesButton = document.querySelector(".row2 .button1");
timesButton.textContent = " x ";
const divisionButton = document.querySelector(".row1 .button1");
divisionButton.textContent = " \u00F7 ";
const button1 = document.querySelector(".row4 .button4");
button1.textContent = "1";
const button2 = document.querySelector(".row4 .button3");
button2.textContent = "2";
const button3 = document.querySelector(".row4 .button2");
button3.textContent = "3";
const button4 = document.querySelector(".row3 .button4");
button4.textContent = "4";
const button5 = document.querySelector(".row3 .button3");
button5.textContent = "5";
const button6 = document.querySelector(".row3 .button2");
button6.textContent = "6";
const button7 = document.querySelector(".row2 .button4");
button7.textContent = "7";
const button8 = document.querySelector(".row2 .button3");
button8.textContent = "8";
const button9 = document.querySelector(".row2 .button2");
button9.textContent = "9";
const negativeButton = document.querySelector(".row1 .button4");
negativeButton.textContent = "-/+";
const button0 = document.querySelector(".row1 .button3");
button0.textContent = "0";
const dotButton = document.querySelector(".row1 .button2");
dotButton.textContent = ".";
