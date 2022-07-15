'use strict';
//Elementos del HTML
const inputNumber = document.querySelector('.js_inputNumber');
const testButton = document.querySelector('.js_testButton');
const validationInfo = document.querySelector('.js_validationInfo');
const numAttempts = document.querySelector('.js_numAttempts');
const resetButton = document.querySelector('.js_resetButton');

let counter = 0;
let userNumber = '';
const maxCounter = 10;

//FUNCIONES
const getRandomNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

const getUserNumber = () => {
  const num = parseFloat(inputNumber.value);
  console.log(`El número elegido es el :  ${num}`);
  return num;
};

const updateValidationInfo = (message) => {
  validationInfo.innerHTML = message;
};

const validateNumber = () => {
  if (isNaN(userNumber)) {
    updateValidationInfo('No es un número. Introduce un número entre 1 y 100');
  } else if (userNumber < 1 || userNumber > 100) {
    updateValidationInfo('El número debe estar entre 1 y 100');
  } else if (userNumber < randomNumber) {
    updateValidationInfo('Demasiado bajo');
  } else if (userNumber > randomNumber) {
    updateValidationInfo('Demasiado alto');
  } else if (userNumber === randomNumber) {
    updateValidationInfo('¡¡¡Has ganado campeona!!!');
  }
};
const enableButtons = (enable) => {
  testButton.disabled = !enable;
  resetButton.disabled = !enable;
};

const icreaseCounter = () => {
  if (counter < maxCounter) {
    counter += 1;
    numAttempts.innerHTML = ` ${counter}`;
  } else {
    updateValidationInfo('Ups!! Has llegado al número máximo de intentos');
    enableButtons(false);
    setTimeout(handleResetButton, 6000);
  }
};

const resetCounter = () => {
  counter = 0;
  numAttempts.innerHTML = ` ${counter}`;
};

const resetInputNumber = () => {
  inputNumber.value = '';
};

const handleEnterKey = (ev) => {
  if (ev && ev.key === 'Enter') {
    ev.preventDefault();
    handleClickButton(ev);
  }
};

const handleClickButton = (ev) => {
  if (ev) {
    ev.preventDefault();
  }
  userNumber = getUserNumber();
  validateNumber();
  icreaseCounter();
};

const handleResetButton = (ev) => {
  if (ev) {
    ev.preventDefault();
  }
  testButton.disabled = true;
  resetCounter();
  updateValidationInfo('Adivina el nuevo número');
  resetInputNumber();
  enableButtons(true);
  randomNumber = getRandomNumber(100);
  console.log(`New random number: ${randomNumber}`);
};

//EVENTOS
testButton.addEventListener('click', handleClickButton);
resetButton.addEventListener('click', handleResetButton);
inputNumber.addEventListener('click', resetInputNumber);
inputNumber.addEventListener('keypress', handleEnterKey);

//CÓDIGO QUE SE EJECUTA CUANDO CARGA LA PÁGINA

let randomNumber = getRandomNumber(100);
console.log(`Random number: ${randomNumber}`);
