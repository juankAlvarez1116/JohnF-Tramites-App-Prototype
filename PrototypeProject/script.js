function ingresar() {

    document.getElementById("login").style.display = "none";

    document.getElementById("sistema").classList.remove("oculto");

function cerrarSesion() {
    document.getElementById("sistema").classList.add("oculto");
    document.getElementById("login").style.display = "flex";
}

function mostrarSeccion(id) {

    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function (seccion) {

        seccion.classList.add("oculto");

    });

    document.getElementById(id).classList.remove("oculto");

}