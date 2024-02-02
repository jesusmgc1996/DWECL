var random = Math.round(Math.random() * 99 + 1);
var limInf = 1;
var limSup = 100;
var cont = 1;

function comprobar(num) {
    if (cont < 10 && num != random) {
        if (num < random) {
            limInf = num;
            alert(`El número introducido es menor. Debe estar entre ${limInf} y ${limSup}`);
            cont++;
        }
        else {
            limSup = num;
            alert(`El número introducido es mayor. Debe estar entre ${limInf} y ${limSup}`);
            cont++;
        }
    }
    else if (num == random) alert(`El número introducido es correcto. Número de intentos: ${cont}`);
    else alert("¡Has perdido!");
}