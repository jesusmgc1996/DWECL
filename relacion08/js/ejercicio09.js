function limpiar(campo) {
    document.getElementById(campo).value = '';
}

function convertirDistancia() {
    var campoKm = document.getElementById('km');
    var campoM = document.getElementById('m');
    var km = parseFloat(campoKm.value);
    var m = parseFloat(campoM.value);

    if (isNaN(km) && isNaN(m)) {
        alert("Introduzca al menos un valor para convertir.");
        return;
    }

    if (!isNaN(km)) {
        campoM.value = km * 1000;
    }

    if (!isNaN(m)) {
        campoKm.value = m / 1000;
    }
}

function convertirPeso() {
    var campoKg = document.getElementById('kg');
    var campoG = document.getElementById('g');
    var kg = parseFloat(campoKg.value);
    var g = parseFloat(campoG.value);

    if (isNaN(kg) && isNaN(g)) {
        alert("Introduzca al menos un valor para convertir.");
        return;
    }

    if (!isNaN(kg)) {
        campoG.value = kg * 1000;
    }

    if (!isNaN(g)) {
        campoKg.value = g / 1000;
    }
}