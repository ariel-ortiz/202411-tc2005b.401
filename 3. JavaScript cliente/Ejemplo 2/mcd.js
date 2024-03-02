const entradas = document.getElementById("entradas");
const entrada1 = document.getElementById("entrada1");
const entrada2 = document.getElementById("entrada2");
const boton_mcd = document.getElementById("boton_mcd");
const salida = document.getElementById("salida");
const resultado = document.getElementById("resultado");

boton_mcd.addEventListener("click", calcular_mcd);

function calcular_mcd() {
  let x = parseInt(entrada1.value) || 0;
  let y = parseInt(entrada2.value) || 0;
  let z = mcd(x, y);
  entradas.style.display = 'none'; // hacer invisible
  resultado.innerText = `El MCD de ${x} y ${y} es ${z}.`;
  salida.style.display = 'block'; // hacer visible
}

// Algoritmo de Euclides
function mcd(a, b) {
  while (b != 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}
