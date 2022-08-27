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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutPut("+", initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  createAndWriteOutPut("-", initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutPut("*", initialResult, enteredNumber);
  writeToLog('MULTIPLE', initialResult, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutPut("/", initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
