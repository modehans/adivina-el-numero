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


function checkNum() {
  //recoge el valor de la usuaria y lo muestra por consola
  const num = parseInt(inputNumber.value);
  console.log("El número elegido es el : " + num);
  //compara el valor usuaria con valor random
  if (num < 1 || num > 100) {
    text.innerHTML = "El número debe estar entre 1 y 100";
  } else if (num < randomNumber) {
    text.innerHTML = "Demasiado bajo";
  } else if (num > randomNumber) {
    text.innerHTML = "Demasiado alto";
  } else if (num === randomNumber) {
    text.innerHTML = "¡¡¡Has ganado campeona!!!";
  }
}

function handleClickButton(ev) {
  //evitar que envíe el número
  ev.preventDefault();
  //Coge el número
  checkNum();
}



button.addEventListener("click", handleClickButton);