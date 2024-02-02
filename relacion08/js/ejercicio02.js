document.addEventListener("DOMContentLoaded", e => {
    var numero;
    var rojo = Math.floor(Math.random() * 256);
    var verde = Math.floor(Math.random() * 256);
    var azul = Math.floor(Math.random() * 256);
    
    do {
        numero = prompt("Introduzca un número:");

        if (isNaN(numero)) {
            alert("No ha introducido un número");
        } else {
            alert("Ha introducido un número");
        }
    } while(isNaN(numero));

    document.body.style.backgroundColor = "rgb(" + rojo + ", " + verde + ", " + azul + ")";
})