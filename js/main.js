'use strict';
//Elementos del HTML
const inputNumber = document.querySelector('.js_inputNumber');
const testButton = document.querySelector('.js_btnPlay');
const clueText = document.querySelector('.js_clueText');
const triesElement = document.querySelector('.js_tries');

//FUNCIONES
//Generador de números desde 1 a valor metido en linea 1
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//Recoge número de la usuaria
function getNumUser() {
  const num = parseInt(inputNumber.value);
  console.log(`El número elegido es el :  ${num}`);
  return num;
}
//Escribir en el HTML las pistas
function renderClueTex(message) {
  clueText.innerHTML = message;
}
//Compara número usuaria con valor generado automáticamente
function checkNum() {
  const num = getNumUser();
  //compara el valor usuaria con valor random
  if (isNaN(num)) {
    renderClueTex('No es un número.Introduzca un número entre 1 y 100');
  } else if (num < 1 || num > 100) {
    renderClueTex('El número debe estar entre 1 y 100');
  } else if (num < randomNumber) {
    renderClueTex('Demasiado bajo');
  } else if (num > randomNumber) {
    renderClueTex('Demasiado alto');
  } else if (num === randomNumber) {
    renderClueTex('¡¡¡Has ganado campeona!!!');
  }
}
// Contador
function upcounter() {
  triesCounter += 1;
  triesElement.innerHTML = ` ${triesCounter}`;
}

function handleClickButton(ev) {
  ev.preventDefault();
  checkNum();
  upcounter();
}
//EVENTOS
testButton.addEventListener('click', handleClickButton);

//CÓDIGO QUE SE EJECUTA CUANDO CARGA LA PÁGINA
let triesCounter = 0;
//Genera un número aleatorio entre 1 y 100
const randomNumber = getRandomNumber(100);
console.log(`Random number: ${randomNumber}`);
