function aniadir() {
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo";
    document.querySelectorAll("p")[0].insertAdjacentElement("afterend", nuevoParrafo);
}

function modificar() {
    document.querySelectorAll("p")[1].textContent = "Segundo párrafo modificado";
}

function eliminar() {
    document.querySelectorAll("p")[1].remove();
}