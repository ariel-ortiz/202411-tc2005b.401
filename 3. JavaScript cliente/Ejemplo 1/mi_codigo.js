const mi_buton = document.getElementById("mi_boton");
const mi_titulo = document.getElementById("mi_titulo");
const mi_buton_rojo = document.getElementById("mi_boton_rojo");
const cuerpo = document.getElementById("cuerpo");

mi_buton.addEventListener("click", boton_presionado);
mi_buton_rojo.addEventListener("click", enrojece);

function boton_presionado() {
  mi_titulo.innerText = "Presionaste el botón";
}

function enrojece() {
  cuerpo.classList.add("rojo");
}
