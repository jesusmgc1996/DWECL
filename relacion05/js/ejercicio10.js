var elementos = document.querySelectorAll("li").length + 1;

function insertar() {
    var contenido = document.querySelector("#contenido").value;
    var posicion = parseInt(document.querySelector("#posicion").value);

    if (contenido.trim() === '') {
        alert('Debe introducir un contenido');
        return;
    }

    if (isNaN(posicion) || posicion < 1 || posicion > elementos) {
        alert('La posición debe ser un número entre 1 y ' + elementos);
        return;
    }

    var lista = document.querySelector("#lista");
    var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = contenido;

    if (posicion === elementos) {
        lista.appendChild(nuevoElemento);
    } else {
        lista.children[posicion - 1].insertAdjacentElement("beforebegin", nuevoElemento);
    }
    elementos++;
}