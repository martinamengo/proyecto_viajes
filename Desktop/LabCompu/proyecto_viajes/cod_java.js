function validar() {
  let usuario = document.getElementById("nombre").value;
  let clave = document.getElementById("clave").value;

  if (usuario == "martina" && clave == "1234") {
    window.location.href = "indexV2.html";
  } else {
    alert("usuario y clave incorrectos");
  }
}
function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("clave").value = "";
}
