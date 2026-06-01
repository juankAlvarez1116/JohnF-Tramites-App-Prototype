function ingresar() {

    document.getElementById("login").style.display = "none";

    document.getElementById("sistema").classList.remove("oculto");
}

function cerrarSesion() {
    document.getElementById("sistema").classList.add("oculto");
    document.getElementById("login").style.display = "flex";
}

function mostrarSeccion(id) {

    let secciones =
        document.querySelectorAll(".seccion");

    secciones.forEach(function (seccion) {
        seccion.classList.add("oculto");
    });

    document.getElementById(id)
        .classList.remove("oculto");
}

function agregarCliente() {

    let nombre = prompt("Nombre:");
    let telefono = prompt("Teléfono:");
    let correo = prompt("Correo:");

    let tabla =
        document.getElementById("tablaClientes");

    let fila = tabla.insertRow();

    fila.innerHTML =
        "<td>" + nombre + "</td>" +
        "<td>" + telefono + "</td>" +
        "<td>" + correo + "</td>" +
        "<td><button>Editar</button></td>";
}

function agregarVehiculo() {

    let placa = prompt("Placa:");
    let ciudad = prompt("Ciudad:");
    let cliente = prompt("Cliente:");

    let tabla =
        document.getElementById("tablaVehiculos");

    let fila = tabla.insertRow();

    fila.innerHTML =
        "<td>" + placa + "</td>" +
        "<td>" + ciudad + "</td>" +
        "<td>" + cliente + "</td>" +
        "<td>Pendiente</td>" +
        "<td class='amarillo'>Por revisar</td>" +
        "<td>Pendiente</td>" +
        "<td class='amarillo'>Por revisar</td>" +
        "<td><button>Editar</button></td>";
}

function calcularCotizacion() {

    document.getElementById(
        "resultadoCotizacion"
    ).innerHTML =
        "Valor trámite: $150.000<br>" +
        "Servicio JohnF: $100.000<br><br>" +
        "<strong>Total: $250.000</strong>";
}