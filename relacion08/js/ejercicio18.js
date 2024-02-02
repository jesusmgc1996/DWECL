function enviar(id) {
    var formulario = document.getElementById("form" + id);

    var apellidos = formulario.apellidos.value.trim();
    if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(apellidos)) {
        alert("Los apellidos introducidos no son válidos");
        return;
    }

    var nombre = formulario.nombre.value.trim();
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("El nombre introducido no es válido");
        return;
    }

    var domicilio = formulario.domicilio.value.trim();
    if (!/^[a-zA-Z\dº,\s]+$/u.test(domicilio)) {
        alert("El domicilio introducido no es válido");
        return;
    }

    var sexos = formulario.querySelectorAll('input[name="sexo"]');
    var sexo = false;
    for (var i = 0; i < sexos.length; i++) {
        if (sexos[i].checked) {
            sexo = true;
            break;
        }
    }
    if (!sexo) {
        alert("Debe seleccionar su sexo");
        return;
    }

    var edad = formulario.edad.value;
    if (edad < 15) {
        alert("La edad introducida no es válida");
        return;
    }

    var checkbox = formulario.querySelectorAll('input[name^="asignatura"]:checked');
    if (checkbox.length < 1) {
        alert("Debe seleccionar al menos 1 módulo");
        return;
    }
}

