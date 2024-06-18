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

function reservar() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("email").value = "";
  document.getElementById("resultado").textContent =
    "Datos de la reserva guardados";
}

function presupuesto() {
  let v1 = document.getElementById("destino").value;
  let v2 = document.getElementById("tipo_viaje").value;

  if (v1 == 1 && v2 == 1) {
    document.getElementById("resultado2").textContent =
      "El presupuesto estimado es de: $3.000.000";
  }

  if (v1 == 1 && v2 == 2) {
    document.getElementById("resultado2").textContent =
      "El presupuesto estimado es de: $4.500.000";
  }

  if (v1 == 1 && v2 == 3) {
    document.getElementById("resultado2").textContent =
      "El presupuesto estimado es de: $1.800.000";
  }

  if (v1 == 1 && v2 == 4) {
    document.getElementById("resultado2").textContent =
      "El presupuesto estimado es de: $2.000.000";
  }
  if (v1 == 1 && v2 == 5) {
    document.getElementById("resultado2").textContent =
      "El presupuesto estimado es de: $6.000.000";
  }
}

function calcular() {
  let valor1 = parseFloat(document.getElementById("pasajeros").value);
  let valor2 = parseFloat(document.getElementById("habitaciones").value);
  let op = document.getElementById("opera").value;
  let resultado2;

  if (op == 1) {
    resultado2 = valor1 + valor2;
  }

  if (op == 2) {
    resultado2 = valor1 - valor2;
  }

  if (op == 3) {
    resultado2 = valor1 * valor2;
  }

  document.getElementById("resultado2").textContent =
    "El resultado es: " + resultado2;
}
