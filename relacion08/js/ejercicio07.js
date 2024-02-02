document.addEventListener("DOMContentLoaded", e => {
  var filas = 10;
  var columnas = 10;

  function iniciarTablero() {
    var tabla = document.getElementById('tablero');
    for (var i = 0; i < filas; i++) {
      var fila = document.createElement('tr');
      for (var j = 0; j < columnas; j++) {
        var celda = document.createElement('td');
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
  }

  function colocarBarcoHorizontal(fila, columna, longitud) {
    for (var i = 0; i < longitud; i++) {
      document.getElementById('tablero').rows[fila].cells[columna + i].classList.add('barco');
    }
  }

  function colocarBarcoVertical(fila, columna, longitud) {
    for (var i = 0; i < longitud; i++) {
      document.getElementById('tablero').rows[fila + i].cells[columna].classList.add('barco');
    }
  }

  function colocarBarcos(longitud, cantidad) {
    for (var i = 0; i < cantidad; i++) {
      var fila, columna;
      do {
        fila = Math.floor(Math.random() * filas);
        columna = Math.floor(Math.random() * columnas);
      } while (!posicionValida(fila, columna, longitud));

      if (Math.random() < 0.5) {
        colocarBarcoHorizontal(fila, columna, longitud);
      } else {
        colocarBarcoVertical(fila, columna, longitud);
      }
    }
  }

  function posicionValida(fila, columna, longitud) {
    if (columna + longitud > columnas) {
      return false;
    }

    if (fila + longitud > filas) {
      return false;
    }

    for (var i = 0; i < longitud; i++) {
      if (document.getElementById('tablero').rows[fila].cells[columna + i].classList == 'barco') {
        return false;
      }
    }

    for (var i = 0; i < longitud; i++) {
      if (document.getElementById('tablero').rows[fila + i].cells[columna].classList == 'barco') {
        return false;
      }
    }
    
    return true;
  }

  iniciarTablero();

  colocarBarcos(4, 1);
  colocarBarcos(3, 2);
  colocarBarcos(2, 3);
  colocarBarcos(1, 2);
})