var indice = 0;

function mostrarSiguiente() {
    var parrafos = document.querySelectorAll('p');

    parrafos[indice].style.display = 'block';
    indice++;

    if (indice === parrafos.length) {
        document.querySelector('button').disabled = true;
    }
}