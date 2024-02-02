function ocultar() {
    var parrafo = document.getElementById("parrafo");
    parrafo.style.display = "none";
}

function crearParrafo() {
    var parrafo = document.createElement("p");
    var body = document.body;
    parrafo.textContent = "párrafo creado anterior al que había";
    body.insertBefore(parrafo, body.firstChild);
}

function invertirColores() {
    var parrafo = document.getElementById("parrafo");
    var colorParrafo = parrafo.style.backgroundColor;
    var colorLetra = parrafo.style.color;
    parrafo.style.backgroundColor = colorLetra;
    parrafo.style.color = colorParrafo;
}

document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("dblclick", function () {
        var parrafo = document.getElementById("parrafo");
        parrafo.style.display = "block";
    });

    document.addEventListener("keydown", function (event) {
        if (event.code === "F10" && event.shiftKey) {
            var parrafo = document.getElementById("parrafo");
            parrafo.style.backgroundColor = "blue";
            parrafo.style.color = "white";
            parrafo.textContent = "Vacío";
        }
    });
})