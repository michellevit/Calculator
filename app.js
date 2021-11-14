// SELECTORS

const mainResults = document.getElementById("current-input"); // div where the results appear on the calculator
const constTrackedCalc = document.getElementById("tracked-calculation"); // div where the tracked calculation appears (above the results) on the calculator

// VARIABLES

var userInput = ""; // number representing button user has just pushed
var result = ""; // number in largest black font AKA the result (default is 0)
var currOperator = ""; // current operator being used on the inputs
var varTrackedCalc = ""; // representation of the calculation done so far -> appears above result in smaller text
var memory = ""; // result of the current calculation

// FUNCTIONS

// triggered when user presses a number button on calculator -> returns main calculator result
function buttonPress(event) {
  console.log("****You have entered the buttonPress() function");
  userInput = event.target.textContent; // returns content of the button pressed (e.g. "5")-> event.target returns the element of the page that was clicked (e.g. if you click a button it will return <button>), .textContent provide whatever text content is inside that elemnt (e.g. <button>DELETE</button> then event.target.textContent will return "DELETE" AKA the text content inside the element you just clicked on.)
  // if number is bigger than screen -> alert error
  console.log("User Input: " + userInput);
  if (result.length > 12) {
    alert("Number too big.");
    mainResults.textContent = error1;
  }
  // if the result is at zero, and the user enters a number, display that number
  // e.g. "0" -> "1" (instead of "0" -> "01")
  // e.g. "0" -> "0." (instead of "0" -> "."")
  else if (result[0] == "0" && userInput != ".") {
    console.log("You are in (result[0] == '0' && userInput != '.')");
    result = userInput;
    console.log("Result: " + result);
    mainResults.textContent = result;
    varTrackedCalc = result;
    console.log("Var Tracked Calculation: " + varTrackedCalc);
  }
  //else if (memory != "") {
  //    result = eval(parseInt(result) + currOperator +  parseInt(memory));
  //    mainResults.textContent = userInput;
  //    varTrackedCalc = result;
  //}
  else if (memory == "") {
    result = result + userInput;
    console.log("You are in (else if (memory = ''))");
    console.log("Result: " + result);
    console.log("Memory: " + memory);
    mainResults.textContent = result;
  } else {
    result = result + userInput;
    console.log("You are in (else)");
    console.log("Result: " + result);
    console.log("Memory: " + memory);
    varTrackedCalc = memory + " " + currOperator + " " + result;
    console.log("Var Tracked Calc: " + varTrackedCalc);
    mainResults.textContent = result;
  }
}

function percent() {}

// delete most recent entry(e.g. if you have '5 + 4 +' and you type '7', then CE will just delete the 7 digit, so you can continue with your computation)
// both buttons have the same functionality
function ce() {
  console.log("****You have entered the ce() function");
  result = "0";
  console.log("Result: " + result);
  mainResults.textContent = result;
}

// clears the entire entry (e.g. '5 + 4 + ' all will be cleared)
function c() {
  console.log("****You have entered the c() function");
  console.clear();
  varTrackedCalc = "";
  console.log("Var Tracked Calculation: " + varTrackedCalc);
  result = "0";
  console.log("Result: " + result);
  mainResults.textContent = result;
  constTrackedCalc.textContent = varTrackedCalc;
  memory = "";
  console.log("Memory: " + memory);
}

function deleteLastDigit() {
  console.log("****You have entered the deleteLastDigit() function");
  if (result != "0") {
    console.log("You are in (if result != 0)");
    result = result.slice(0, -1);
    console.log("Result: " + result);
    if (result == "") {
      console.log("You are in (if result == '')");
      result = "0";
      console.log("Result: " + result);
    }
    mainResults.textContent = result;
  }
}

// 1/x
function reciprocal() {
  if (result == 0) {
    constTrackedCalc.textContent = "1 /(0)";
    mainResults.textContent = "Cannot divide by zero";
  } else {
    var x = result;
    result = 1 / x;
    varTrackedCalc = "1 / (" + result + ")";
    constTrackedCalc.textContent = varTrackedCalc;
    mainResults.textContent = result;
  }
}

function powerOfTwo() {}

function squareRoot() {}

function divide() {
  currOperator = "/";
}

function multiply() {
  currOperator = "*";
  constTrackedCalc.textContent = result + " " + "x" + " ";
  varTrackedCalc = result;
  result = "0";
}

function subtract() {
  currOperator = "-";
}

function add() {
  console.log("****You have entered the add() function");
  currOperator = "+";
  console.log("Current Operator: " + currOperator);
  if (varTrackedCalc.includes("=")) {
    console.log("Entering (if varTrackedCalc.includes('=')) function");
    console.log("Var Tracked Calc: " + varTrackedCalc);
    memory = result + memory;
    console.log("Memory: " + memory);
    varTrackedCalc = memory + " " + currOperator + " ";
  } else {
    console.log("Entering (if varTrackedCalc does not include '=') function");
    console.log("Var Tracked Calc: " + varTrackedCalc);
    if (memory != "") {
      console.log("Entering (if memory != '') function");
      result = eval(parseInt(result) + currOperator + parseInt(memory));
      console.log("Result = " + result);
    } else {
      console.log("Entering (if memory == '') function");
      result = parseInt(result);
      console.log("Result = " + result);
      varTrackedCalc = result + " " + currOperator;
    }
  }
  console.log("Entering back into main add() function");
  console.log("Var/Const Tracked Calculation: " + varTrackedCalc);
  constTrackedCalc.textContent = varTrackedCalc;
  memory = result;
  console.log("Memory: " + memory);
  result = "";
  console.log("Result = " + result);
}

function equals() {
  console.log("****You have entered the equals() function");
  result = eval(parseInt(result) + currOperator + parseInt(memory));
  console.log("Result = " + result);
  varTrackedCalc = varTrackedCalc + " " + "=";
  constTrackedCalc.textContent = varTrackedCalc;
  console.log("Var/Const Calculation = " + varTrackedCalc);
  mainResults.textContent = result;
  memory = result;
  console.log("Memory: " + memory);
  currOperator = "";
  console.log("Current Operator: " + currOperator);
  result = "";
  console.log("Result: " + result);
}

// +/-: allows you to change number from positive to negative, or negative to positive
function changePosNeg() {}
