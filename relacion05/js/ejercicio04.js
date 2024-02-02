function enviar() {
    document.querySelector("#nombreCompleto").textContent = document.querySelector("#nombre").value + " " + document.querySelector("#apellidos").value;
    document.querySelector("#bienvenida").style.display = "block";
}

function limpiar() {
    document.querySelector("#formulario").reset();
    document.querySelector("#bienvenida").style.display = "none";
}