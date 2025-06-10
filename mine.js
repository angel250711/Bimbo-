window.onload = function () {
  const nombre = prompt("Bienvenid@, ¿cuál es tu nombre?");
  if (nombre) {
    alert("Es un gusto tenerte aquí, " + nombre + "!");
  }

  const boton = document.getElementById("promoBtn");
  boton.onclick = function () {
    alert("Con el código: 3785 obtendrás un 7% en tu próxima compra");
  };
};
