document.addEventListener("DOMContentLoaded", e => {
  class Punto {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    cambiar(x, y) {
      this.x = x;
      this.y = y;
    }

    iguales(punto) {
      if (this.x === punto.x && this.y === punto.y) {
        return "Los puntos son iguales";
      } else {
        return "Los puntos son distintos";
      }
    }

    sumar(punto) {
      return new Punto(this.x + punto.x, this.y + punto.y);
    }

    distancia(punto) {
      return Math.sqrt(Math.pow(punto.x - this.x, 2) + Math.pow(punto.y - this.y, 2));
    }
  }

  var punto1 = new Punto(1, 2);
  var punto2 = new Punto(3, 4);

  console.log("Punto 1:", punto1);
  console.log("Punto 2:", punto2);

  punto1.cambiar(3, 4);

  console.log("¿Punto 1 y Punto 2 son iguales?", punto1.iguales(punto2));

  console.log("Resultado de sumar Punto 1 y Punto 2:", punto1.sumar(punto2));

  console.log("Distancia entre Punto 1 y Punto 2:", punto1.distancia(punto2));
})