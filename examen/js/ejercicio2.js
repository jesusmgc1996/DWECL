function generarMatriz() {
    var matriz = [];
    
    for (var i = 0; i < 10; i++) {
        var fila = [];
        for (var j = 0; j < 10; j++) {
            fila.push(Math.floor(Math.random() * 70) + 30);
        }
        matriz.push(fila);
    }

    return matriz;
}

function invertirDiagonal(matriz) {
    var tamanio = matriz.length;

    for (var i = 0; i < tamanio / 2; i++) {
        var diagonal = matriz[i][i];
        matriz[i][i] = matriz[tamanio - 1 - i][tamanio - 1 - i];
        matriz[tamanio - 1 - i][tamanio - 1 - i] = diagonal;
    }
}

function mostrarMatriz(matriz, mensaje) {
    document.write(mensaje + "<br><table>");
    for (var i = 0; i < matriz.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < matriz.length; j++) {
            document.write("<td>" + matriz[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function generarYMostrarMatrices() {
    var matrizAleatoria = generarMatriz();

    mostrarMatriz(matrizAleatoria, "Matriz Aleatoria:");

    var matrizInvertida = matrizAleatoria;
    invertirDiagonal(matrizInvertida);

    mostrarMatriz(matrizInvertida, "<br>Matriz Invertida:");
}

generarYMostrarMatrices();