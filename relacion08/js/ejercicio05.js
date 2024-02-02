function cifrarTexto() {
    var texto = document.getElementById("texto").value;
    var original = document.getElementById("original");
    var cifrado = document.getElementById("cifrado");
    var desplazamiento = Math.floor(Math.random() * 26);
    var textoCifrado = "";

    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charCodeAt(i);

        if (caracter >= 65 && caracter <= 90) {
            textoCifrado += String.fromCharCode(((caracter - 65 + desplazamiento) % 26) + 65);
        } else if (caracter >= 97 && caracter <= 122) {
            textoCifrado += String.fromCharCode(((caracter - 97 + desplazamiento) % 26) + 97);
        } else {
            textoCifrado += texto[i];
        }
    }

    original.textContent = "Texto original: " + texto;
    cifrado.textContent = "Texto cifrado: " + textoCifrado;
}