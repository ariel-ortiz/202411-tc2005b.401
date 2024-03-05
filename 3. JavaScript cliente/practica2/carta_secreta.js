const laCarta = document.getElementById("la_carta");
const botonPrincipal = document.getElementById("boton_principal");
const botonReinicia = document.getElementById("boton_reinicia");
const cartas = iniciaCartas();

console.log(cartas);

botonPrincipal.addEventListener("click", descubreCarta);

function iniciaCartas() {
  const cartas = [];
  for (let palo of 'CDHS') {
    for (let i = 1; i <= 13; i++) {
      cartas.push(`${palo}_${i.toString().padStart(2, '0')}.svg`);
    }
  }
  shuffle(cartas);
  return cartas;
}

// Tomado de:
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(a) {
  for (let i = a.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

function descubreCarta() {

}
