function validarFormulario() {

    document.getElementById("errorNombre").innerText = "";
    document.getElementById("errorSexo").innerText = "";

    var nombre = document.getElementById("nombre").value;
    var sexo = document.getElementById("sexo").value;

    if (nombre.trim() === "") {
        document.getElementById("errorNombre").innerHTML = "<span style='color: red'>Por favor, introduzca su nombre</span><br>";
    }

    if (sexo === "") {
        document.getElementById("errorSexo").innerHTML = "<span style='color: red'>Por favor, seleccione su sexo</span><br>";
    }

    if (nombre.trim() !== "" && sexo !== "") {
        document.getElementById("formulario").submit();
    }
}