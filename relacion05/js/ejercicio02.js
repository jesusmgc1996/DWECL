function mostrarTexto() {
    document.querySelector("#leer").className = "visible";
    document.querySelector("#mostrar").className = "oculto";
    document.querySelector("#ocultar").className = "visible";
}

function ocultarTexto() {
    document.querySelector("#leer").className = "oculto";
    document.querySelector("#mostrar").className = "visible";
    document.querySelector("#ocultar").className = "oculto";
}