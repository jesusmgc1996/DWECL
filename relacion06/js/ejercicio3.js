document.addEventListener("DOMContentLoaded", e => {

    var cuadro = document.getElementById("cuadro");

    document.addEventListener("mouseover", function(event) {
        cuadro.style.backgroundColor = "blue";
        cuadro.innerText = "X: " + event.pageX + ", Y: " + event.pageY;
    });

    document.addEventListener("keyup", function(event) {
        cuadro.style.backgroundColor = "red";
        cuadro.innerText = "Tecla pulsada: " + event.key + ", ASCII: " + event.keyCode;
    });

    document.addEventListener("mouseout", function() {
        cuadro.style.backgroundColor = "yellow";
        cuadro.innerText = "";
    });
});