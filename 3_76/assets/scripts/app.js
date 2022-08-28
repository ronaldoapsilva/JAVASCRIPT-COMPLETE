const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
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

function calculateResult(caculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    caculationType !== 'ADD' &&
    caculationType !== 'SUBTRACT' &&
    caculationType !== 'MULTIPLE' &&
    caculationType !== 'DIVIDE' ||
    !enteredNumber) {
      return;
    }
  const initialResult = currentResult;
  let mathOperator;
  if (caculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (caculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (caculationType === 'MULTIPLE') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (caculationType == 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutPut(mathOperator, initialResult, enteredNumber);
  writeToLog(caculationType, initialResult, enteredNumber, currentResult)
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLE');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
