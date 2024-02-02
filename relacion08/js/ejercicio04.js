function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoElement = document.getElementById("resultado");
    var factorial = 1;
    
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }

    resultadoElement.textContent = "El factorial es: " + factorial;
}