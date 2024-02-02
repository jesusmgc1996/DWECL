function muestraOculta(idParrafo) {
    var parrafo = document.getElementById("parrafo" + idParrafo);
    var enlace = document.getElementById("enlace" + idParrafo);

    if (parrafo.style.display == "" || parrafo.style.display == "block") {
        parrafo.style.display = "none";
        enlace.innerHTML = "Mostrar contenido párrafo " + idParrafo;
    } else {
        parrafo.style.display = "block";
        enlace.innerHTML = "Ocultar contenido párrafo " + idParrafo;
    }
}

function aumentar(idParrafo) {
    var parrafo = document.getElementById("parrafo" + idParrafo);
    var fuente = window.getComputedStyle(parrafo, null).getPropertyValue('font-size');
    parrafo.style.fontSize = (parseFloat(fuente) * 1.2) + "px";
}

function disminuir(idParrafo) {
    var parrafo = document.getElementById("parrafo" + idParrafo);
    var fuente = window.getComputedStyle(parrafo, null).getPropertyValue('font-size');
    parrafo.style.fontSize = (parseFloat(fuente) / 1.2) + "px";
}

function defecto(idParrafo) {
    var parrafo = document.getElementById("parrafo" + idParrafo);
    parrafo.style.fontSize = "1em";
}