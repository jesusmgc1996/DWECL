function realizarApuesta() {
    var numeros = Array.from({ length: 49 }, (_, index) => index + 1);
    var apuesta = desordenar(numeros).slice(0, 6);
    var tabla = document.getElementById("tablaNumeros");
    tabla.innerHTML = "";

    var fila = tabla.insertRow();
    var fila2 = tabla.insertRow();

    for (var i = 1; i <= 49; i++) {
        var celda = fila.insertCell();
        celda.textContent = i;

        var celda2 = fila2.insertCell();

        if (apuesta.includes(i)) {
            celda2.textContent = "X";
        }
    }
}

function desordenar(array) {
    array = array.slice();
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}