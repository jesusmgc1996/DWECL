function calcularSalarioFinal() {
    var edad = parseInt(document.getElementById("edad").value);
    var salarioBase = parseFloat(document.getElementById("salarioBase").value);
    var salarioFinal;

    if (salarioBase > 2000) {
        salarioFinal = salarioBase;
    } else if (salarioBase >= 1000 && salarioBase <= 2000) {
        if (edad > 50) {
            salarioFinal = salarioBase * 1.1;
        } else {
            salarioFinal = salarioBase * 1.05;
        }
    } else {
        if (edad >= 50 && edad <= 60) {
            salarioFinal = salarioBase * 1.15;
        } else if (edad < 50) {
            salarioFinal = salarioBase * 1.075;
        } else {
            salarioFinal = salarioBase * 1.2;
        }
    }

    document.getElementById("salarioFinal").value = salarioFinal.toFixed(2);
    document.getElementById("salario").style.display = "block";
}