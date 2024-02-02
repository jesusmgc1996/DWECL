function contarCaracteres() {

    var textArea = document.getElementById("textArea");
    var contador = document.getElementById("contador");

    var caracteresTotales = 50;
    var longitud = textArea.value.length;
    var caracteresRestantes = caracteresTotales - longitud;

    contador.innerHTML = "Caracteres escritos: " + longitud + "<br>Caracteres restantes: " + caracteresRestantes;

    if (longitud > caracteresTotales) {
        textArea.value = textArea.value.substring(0, caracteresTotales);
        contador.innerHTML = "Caracteres escritos: " + caracteresTotales + "<br>Caracteres restantes: 0";
    }
}