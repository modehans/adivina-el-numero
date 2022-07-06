const randomNumber = getRandom(100);
const inputNumber = document.querySelector(".js_inputNumber");
const button = document.querySelector(".js_btn");
const text = document.querySelector(".js_text");
const counter = document.querySelector(".js_cont");

//Generador de números desde 1 a valor metido en linea 1
function getRandom(max) {
  return Math.ceil(Math.random() * max);
}
//Visualización número aleatorio en consola
console.log("Random number: " + randomNumber);
