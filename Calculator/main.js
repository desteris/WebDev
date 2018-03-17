'use strict';

let calculator = document.getElementById('calculator');
let calcDisplayEl = document.getElementById('current');
let calcDisplayValue = calcDisplayEl.value;
let currentCalcMode = 'initial';
let calcBtn = document.getElementById('equal');
let clearBtn = document.getElementById('delete');
let memory = [];


// Array of number button elements
let numbers = document.querySelectorAll('.num');

// Array of operator button elements\
let operators = document.querySelectorAll('.op');


numbers.forEach(function(element) {
  // console.log(element);
  element.addEventListener('click', function(event) {

    // Use 'data-cal-mode' attr on form to set mode
    // Mode can be 'number' if number last pressed,
    // or 'operator' if operator last pressed'.
    //currentCalcMode = calculator.dataset.calcMode;

    ////////////////////////////////////////////////////////
    // CALC MODE: INITIAL
    ////////////////////////////////////////////////////////
    if (currentCalcMode === 'initial') {

      // Calc is reset to initial. Update display with button value pressed
      calcDisplayEl.value = this.value;

      // Place this value into memory
      memory.push(calcDisplayEl.value);

    }

    ////////////////////////////////////////////////////////
    // CALC MODE: NUMBER
    ////////////////////////////////////////////////////////
    if (currentCalcMode === 'number') {

      // append the last number pressed to the value
      calcDisplayEl.value = calcDisplayEl.value + this.value;

      // We remove the last item (a number) from the array, and then update the array with the currect value
      memory.pop();

      // Update memory
      memory.push(calcDisplayEl.value);
    }

    ////////////////////////////////////////////////////////
    // CALC MODE: OPERATOR
    ////////////////////////////////////////////////////////
    if (currentCalcMode === 'operator') {

      calcDisplayEl.value = this.value;

      memory.push(calcDisplayEl.value);

      console.log(memory);

    }

    // Since number has been presed, set data-cal-mode attr to 'number'
    // Get updated value of calc-display
    let currentDisplayEl = document.getElementById('current');

    // Set calc mode to number
    currentCalcMode = 'number';

    // Update calc mode var
    //currentCalcMode = calculator.dataset.calcMode;

    let currentDisplayVal = parseInt(currentDisplayEl.value);

    // Place current display value into memory
    //memory.push(currentDisplayVal);
    console.log(memory);

  }, false);
});

// Bind click event to each operator button
operators.forEach(function(element) {
  element.addEventListener('click', function(event) {

    // Gets value from buttons data-operator attr.
    let buttonOperator = this.value;

    memory.push(buttonOperator);

    // Set calc mode to operator
    currentCalcMode = 'operator';

    console.log(memory);
  })
});

////////////////////////////////////////////////////////
// CLEAR BUTTON CLICK
////////////////////////////////////////////////////////
clearBtn.addEventListener('click', (event) => {

  // Reset some stuff
  calcDisplayEl.value = "0";
  memory = [];

  // Set calc mode to initial
  currentCalcMode = 'initial';

  // console.log(memory);
  console.clear();

}, false);


////////////////////////////////////////////////////////
// CALC BUTTON CLICK
////////////////////////////////////////////////////////
calcBtn.addEventListener('click', (event) => {

  console.log(memory);

  // Lets calculate a result.
  let previousVal = memory[0];
  let operator = memory[1];
  let currentVal = memory[2];

  // Operator returns a function name,
  // either 'add', 'subtract', 'multiple' or 'divide'
  // We us this funtion to calculate a result

  let result = '';

  switch (operator) {
    case '+':
      result = add(previousVal, currentVal);
      break;
    case '-':
      result = subtract(previousVal, currentVal);
      break;
    case '*':
      result = multiply(previousVal, currentVal);
      break;
    case '/':
      result = divide(previousVal, currentVal);
      break;
  }

  calcDisplayEl.value = result;

  memory = [result];

  console.log(memory);

}, false);


/////////////////////////////////////////////////////////
// OPERATOR FUNCTIONS
/////////////////////////////////////////////////////////

// Addition
const add = (a, b) => {
  return (+a + +b)
}

// Subtraction
const subtract = (a, b) => {
  return (a - b)
}

// Multiply
const multiply = (a, b) => {
  return (a * b)
}

// Divide
const divide = (a, b) => {
  return (a / b)
}