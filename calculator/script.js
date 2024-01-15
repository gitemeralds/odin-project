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
    button.classList.add("displayable");
  }
}

rows = document.getElementsByClassName("row");
for (let i = 0; i < rows.length; i++) {
  grid.appendChild(rows[i]);
}

const plusButton = document.querySelector(".row4 .button1");
plusButton.textContent = " + ";
plusButton.classList.add("operator");
const minusButton = document.querySelector(".row3 .button1");
minusButton.textContent = " - ";
minusButton.classList.add("operator");
const timesButton = document.querySelector(".row2 .button1");
timesButton.textContent = " x ";
timesButton.classList.add("operator");
const divisionButton = document.querySelector(".row1 .button1");
divisionButton.textContent = " \u00F7 ";
divisionButton.classList.add("operator");
const button1 = document.querySelector(".row4 .button4");
button1.textContent = "1";
button1.classList.add("number");
const button2 = document.querySelector(".row4 .button3");
button2.textContent = "2";
button2.classList.add("number");
const button3 = document.querySelector(".row4 .button2");
button3.textContent = "3";
button3.classList.add("number");
const button4 = document.querySelector(".row3 .button4");
button4.textContent = "4";
button4.classList.add("number");
const button5 = document.querySelector(".row3 .button3");
button5.textContent = "5";
button5.classList.add("number");
const button6 = document.querySelector(".row3 .button2");
button6.textContent = "6";
button6.classList.add("number");
const button7 = document.querySelector(".row2 .button4");
button7.textContent = "7";
button7.classList.add("number");
const button8 = document.querySelector(".row2 .button3");
button8.textContent = "8";
button8.classList.add("number");
const button9 = document.querySelector(".row2 .button2");
button9.textContent = "9";
button9.classList.add("number");
const negativeButton = document.querySelector(".row1 .button4");
negativeButton.textContent = "-/+";
negativeButton.classList.remove("displayable");
const button0 = document.querySelector(".row1 .button3");
button0.textContent = "0";
button0.classList.add("number");
const dotButton = document.querySelector(".row1 .button2");
dotButton.textContent = ".";

const displayableButtons = document.querySelectorAll(".displayable");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
let mathExpression = [];

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    let lastPartOfMathExpression = mathExpression[mathExpression.length - 1];
    if (
      typeof parseFloat(lastPartOfMathExpression, 10) === "number" &&
      mathExpression.length &&
      !isNaN(lastPartOfMathExpression)
    ) {
      mathExpression[mathExpression.length - 1] += button.textContent;
    } else {
      mathExpression.push(button.textContent);
    }
    updateDisplay(button.textContent);
    console.log(mathExpression);
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    let lastPartOfMathExpression = mathExpression[mathExpression.length - 1];
    if (!mathExpression.length) {
      alert("No number found on display.");
      return;
    } else if (
      !isNaN(lastPartOfMathExpression) &&
      typeof parseFloat(lastPartOfMathExpression) === "number"
    ) {
      mathExpression.push(button.textContent);
      updateDisplay(button.textContent);
    } else {
      mathExpression.splice(mathExpression.length - 1, 1);
      console.log(mathExpression);
      mathExpression.push(button.textContent);
      screen.textContent = mathExpression.join("");
    }
  });
});

dotButton.addEventListener("click", () => {
  if (!isNaN(parseFloat(mathExpression[mathExpression.length - 1]))) {
    if (mathExpression[mathExpression.length - 1].toString().includes(".")) {
      alert("This number is already a floating point number.");
      return;
    } else {
      mathExpression[mathExpression.length - 1] += dotButton.textContent;
      updateDisplay(dotButton.textContent);
    }
  } else {
    mathExpression.push("0.");
    updateDisplay("0.");
  }
});

negativeButton.addEventListener("click", () => {
  if (!isNaN(parseFloat(mathExpression[mathExpression.length - 1]))) {
    if (mathExpression[mathExpression.length - 1].toString().includes("-")) {
      console.log("true");
      mathExpression[mathExpression.length - 1] = mathExpression[
        mathExpression.length - 1
      ]
        .toString()
        .replace("-", "");
      console.log(mathExpression);
      screen.textContent = mathExpression.join("");
    } else {
      mathExpression[mathExpression.length - 1] =
        "-" + mathExpression[mathExpression.length - 1];
      screen.textContent = mathExpression.join("");
    }
  } else {
    alert("No number found.");
    return;
  }
});

const updateDisplay = (textToDisplay) => {
  screen.textContent += textToDisplay;
};
