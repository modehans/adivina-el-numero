const randomNumber = getRandom(100);
//Generador de números desde 1 a valor metido en linea 1
function getRandom(max) {
  return Math.ceil(Math.random() * max);
}
//Visualización número aleatorio en consola
console.log("Random number: " + randomNumber);