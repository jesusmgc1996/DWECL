document.addEventListener("DOMContentLoaded", e => {
    Math.mcd = function (a, b) {
        if (a % b === 0) {
            return b;
        } else {
            return Math.mcd(b, a % b);
        }
    };

    Math.mcm = function (a, b) {
        return a * b / Math.mcd(a, b);
    };

    var num1 = 12;
    var num2 = 18;

    var mcd = Math.mcd(num1, num2);
    var mcm = Math.mcm(num1, num2);

    console.log("El máximo común divisor (mcd) de " + num1 + " y " + num2 + " es: " + mcd);
    console.log("El mínimo común múltiplo (mcm) de " + num1 + " y " + num2 + " es: " + mcm);
})