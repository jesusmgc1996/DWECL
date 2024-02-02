function ordenar() {
    var elementos = Array.from(lista.children);

    elementos.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    elementos.forEach(elemento => {
        lista.appendChild(elemento);
    });
}

for (var i = 1; i <= 10; i++) {
    var lista = document.querySelector("#lista");
    var elemento = document.createElement("li");
    elemento.textContent = "Elemento " + i;
    lista.appendChild(elemento);
}