function analizar() {
    var palabras = document.getElementById('textoEntrada').value.split(/\s+/);
    var numPalabras = palabras.length;
    var primeraPalabra = palabras[0];
    var ultimaPalabra = palabras[numPalabras - 1];
    var palabrasAlReves = palabras.reverse().join('..');
    var palabrasOrdenadas = [...palabras].sort().join('..');
    var palabrasOrdenadasInverso = [...palabras].sort().reverse().join('..');

    var texto = "<body style='text-align: center;'><h3>Información sobre el texto introducido...:</h3>"
        + "Número de palabras: <span style='font-weight: bold;'>" + numPalabras
        + "</span><br>Primera palabra: <span style='font-weight: bold;'>" + primeraPalabra
        + "</span><br>Última palabra: <span style='font-weight: bold;'>" + ultimaPalabra
        + "</span><br>Colocadas al revés:<br><span style='font-weight: bold;'>" + palabrasAlReves
        + "</span><br>Ordenadas de la 'a' a la 'z':<br><span style='font-weight: bold;'>" + palabrasOrdenadas
        + "</span><br>Ordenadas de la 'z' a la 'a':<br><span style='font-weight: bold;'>" + palabrasOrdenadasInverso
        + "</span></body>";

    var ventana = window.open('', '_blank', 'width=600, height=400, resizable=yes, scrollbars=yes');
    ventana.document.write(texto);
}