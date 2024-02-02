document.addEventListener("DOMContentLoaded", e => {
  class Fraccion {
    constructor(numerador, denominador) {
      this.numerador = numerador;
      this.denominador = denominador;
    }

    getNumerador() {
      return this.numerador;
    }

    getDenominador() {
      return this.denominador;
    }

    setNumerador(numerador) {
      this.numerador = numerador;
    }

    setDenominador(denominador) {
      this.denominador = denominador;
    }

    imprimirFraccion() {
      return this.numerador + "/" + this.denominador;
    }

    simplificar() {
      var mcd = this.mcd(this.numerador, this.denominador);
      this.numerador /= mcd;
      this.denominador /= mcd;
      return this.imprimirFraccion();
    }

    multiplicarF(fraccion) {
      var numerador = this.numerador * fraccion.getNumerador();
      var denominador = this.denominador * fraccion.getDenominador();
      var resultado = new Fraccion(numerador, denominador);
      return resultado.simplificar();
    }

    dividirF(fraccion) {
      var numerador = this.numerador * fraccion.getDenominador();
      var denominador = this.denominador * fraccion.getNumerador();
      var resultado = new Fraccion(numerador, denominador);
      return resultado.simplificar();
    }

    mcd(a, b) {
      if (a % b === 0) {
        return b;
      } else {
        return this.mcd(b, a % b);
      }
    };
  }

  var fraccion1 = new Fraccion(3, 6);

  console.log("Fracción original:", fraccion1.imprimirFraccion());

  console.log("Fracción simplificada:", fraccion1.simplificar());

  var fraccion2 = new Fraccion(4, 8);

  console.log("Resultado de la multiplicación:", fraccion1.multiplicarF(fraccion2));

  console.log("Resultado de la división:", fraccion1.dividirF(fraccion2));
})