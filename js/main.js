'use strict';
//Elementos del HTML
const inputNumber = document.querySelector('.js_inputNumber');
const testButton = document.querySelector('.js_btnPlay');
const clueText = document.querySelector('.js_clueText');
const triesElement = document.querySelector('.js_tries');
const playAgainBtn = document.querySelector('.js_playAgainBtn');
let numberUser = '';
//FUNCIONES
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getNumUser() {
  const num = parseInt(inputNumber.value);
  inputNumber.value = num; //Muestra el redondeo a entero por si introduce comas o expoenciales
  console.log(`El número elegido es el :  ${num}`);
  return num;
}

function checkNum() {
  if (isNaN(numberUser)) {
    renderClueTex(`No es un número. Introduce un número entre 1 y 100`);
  } else if (numberUser < 1 || numberUser > 100) {
    renderClueTex(`El número debe estar entre 1 y 100`);
  } else if (numberUser < randomNumber) {
    renderClueTex(`Demasiado bajo`);
  } else if (numberUser > randomNumber) {
    renderClueTex(`Demasiado alto`);
  } else if (numberUser === randomNumber) {
    renderClueTex(`¡¡¡Has ganado campeona!!!`);
  }
}
function renderClueTex(message) {
  clueText.innerHTML = message;
}

function upCounter() {
  if (isNaN(numberUser) == false) {
    triesCounter += 1;
    triesElement.innerHTML = ` ${triesCounter}`;
  }
}
function resetCounter() {
  triesCounter = 0;
  triesElement.innerHTML = ` ${triesCounter}`;
}

function resetInputNumber() {
  inputNumber.value = '';
}
function enterTestButton(ev) {
  if (ev.key === 'Enter') {
    ev.preventDefault();
    handleClickButton(ev);
  }
}
function handleClickButton(ev) {
  ev.preventDefault();
  numberUser = getNumUser();
  checkNum();
  upCounter();
}

function handleResetButton(ev) {
  ev.preventDefault();
  resetCounter();
  renderClueTex(`Adivina el nuevo número`);
  resetInputNumber();
  randomNumber = getRandomNumber(100);
  console.log(`New random number: ${randomNumber}`);
}

//EVENTOS
testButton.addEventListener('click', handleClickButton);
playAgainBtn.addEventListener('click', handleResetButton);
inputNumber.addEventListener('click', resetInputNumber);
inputNumber.addEventListener('keypress', enterTestButton);

//CÓDIGO QUE SE EJECUTA CUANDO CARGA LA PÁGINA
let triesCounter = 0;
let randomNumber = getRandomNumber(100);
console.log(`Random number: ${randomNumber}`);
renderClueTex('Escribe el número y pulsa Prueba');
