function invertir() {
    var parrafos = Array.from(document.querySelectorAll("p"));
    var parrafosInvertidos = parrafos.reverse();

    parrafos.forEach(parrafo => {
        body.removeChild(parrafo);
    });

    parrafosInvertidos.forEach(parrafo => {
        body.appendChild(parrafo);
    });
}

for (var i = 1; i <= 5; i++) {
    var body = document.querySelector("body");
    var parrafo = document.createElement("p");
    parrafo.textContent = "Párrafo " + i;
    body.appendChild(parrafo);
}