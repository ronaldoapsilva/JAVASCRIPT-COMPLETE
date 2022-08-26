const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNameInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutPut(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function add() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutPut('+', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries[0])
}

function subtract() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  createAndWriteOutPut('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutPut('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutPut('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
