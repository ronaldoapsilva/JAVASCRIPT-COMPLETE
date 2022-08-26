const defaultResult = 0;
let currentResult = defaultResult;

function getUserNameInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutPut(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function add() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult = currentResult + parseInt(enteredNumber);
  createAndWriteOutPut('+', initialResult, enteredNumber);

}

function subtract() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(enteredNumber);
  createAndWriteOutPut('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enteredNumber);
  createAndWriteOutPut('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNameInput();
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(enteredNumber);
  createAndWriteOutPut('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
