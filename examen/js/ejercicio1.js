function validarDatos() {
    var profesor = document.getElementById("profesor").value;
    var contraseña = document.getElementById("password").value;

    var expresionRegular = /^[a-z\d\s]+$/;

    if (profesor.trim() === "" || contraseña.trim() === "") {
        alert("Usuario y contraseña son obligatorios.");
        return false;
    }

    if (!expresionRegular.test(profesor) || !expresionRegular.test(contraseña)) {
        alert("El usuario y la contraseña deben contener solo letras minúsculas sin acento, números y espacios en blanco.");
        return false;
    }

    identificacion();
    return true;
}

function identificacion() {
    var profesor = document.getElementById("profesor").value;
    var contraseña = document.getElementById("password").value;

    if (profesor === contraseña) {
        document.getElementById("identificacion").classList.add("oculto");
        document.getElementById("formulario").classList.remove("oculto");
    } else {
        alert("Identificación inválida. Por favor, verifica el usuario y la contraseña.");
    }
}

document.addEventListener('DOMContentLoaded', e => {
    var tipoDeporte = document.getElementById('tipoDeporte');
    var opcionesAdicionales = document.getElementById('opcionesAdicionales');
    var materiales = document.getElementById('materiales');

    tipoDeporte.addEventListener('change', function () {
        var selectedDeporte = tipoDeporte.value;
        limpiarOpciones();

        if (selectedDeporte === 'Fútbol' || selectedDeporte === 'Baloncesto') {
            opcionesAdicionales.classList.remove("oculto");
            materiales.classList.add("oculto");
            mostrarGestion();
        } else {
            materiales.classList.remove("oculto");
            opcionesAdicionales.classList.add("oculto");
        }
    });

    function limpiarOpciones() {
        opcionesAdicionales.innerHTML = '';
    }

    function mostrarGestion() {
        var label = document.createElement('label');
        label.innerHTML = 'Tipo de Gestión:';
        opcionesAdicionales.appendChild(label);

        var tipoGestion = document.createElement('select');
        tipoGestion.name = 'tipoGestion';
        tipoGestion.required = true;

        var nuevo = document.createElement('option');
        nuevo.value = 'Nuevo';
        nuevo.text = 'Nuevo material';
        tipoGestion.appendChild(nuevo);

        var reposicion = document.createElement('option');
        reposicion.value = 'Reposicion';
        reposicion.text = 'Reposición de material';
        tipoGestion.appendChild(reposicion);

        opcionesAdicionales.appendChild(tipoGestion);

        var unidadesLabel = document.createElement('label');
        unidadesLabel.innerHTML = 'Unidades:';
        opcionesAdicionales.appendChild(unidadesLabel);

        var unidadesInput = document.createElement('input');
        unidadesInput.type = 'text';
        unidadesInput.name = 'unidades';
        unidadesInput.required = true;
        opcionesAdicionales.appendChild(unidadesInput);
    }

    document.getElementById('formulario').addEventListener('submit', function (event) {
        document.getElementById('Enviar1').disabled = true;
        document.getElementById('Reset1').disabled = true;

        var deporteSeleccionado = document.getElementById('tipoDeporte').value;
        console.log('Deporte seleccionado:', deporteSeleccionado);

        event.preventDefault();
    });
});