var parrafos = document.querySelectorAll("p");
var estadoOriginal = document.body.innerHTML;

function cambiarColor(parrafo) {
    parrafo.style.color = "red";
}

function cambiarTodos() {
    parrafos.forEach(parrafo => cambiarColor(parrafo));
}

function cambiarPrimero() {
    cambiarColor(parrafos[0]);
}

function cambiarPares() {
    parrafos.forEach((parrafo, index) => {
        if (index % 2 !== 0) {
            cambiarColor(parrafo);
        }
    });
}

function cambiarImpares() {
    parrafos.forEach((parrafo, index) => {
        if (index % 2 === 0) {
            cambiarColor(parrafo);
        }
    });
}

function aniadirParrafo() {
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo";
    parrafos[1].insertAdjacentElement("afterend", nuevoParrafo);
}

document.getElementById('estadoOriginal').addEventListener('click', () => {
    document.body.innerHTML = estadoOriginal;
});