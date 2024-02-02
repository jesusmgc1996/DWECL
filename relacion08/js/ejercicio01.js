function logueo() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var mensaje = document.getElementById("mensaje");

    if (usuario === "admin" && password === "1234") {
        mensaje.textContent = "Bienvenido al sistema";
        mensaje.style.color = "";
    } else {
        mensaje.textContent = "Usuario y/o contraseña incorrecta";
        mensaje.style.color = "red";
    }
}

function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
    document.getElementById("mensaje").textContent = "";
}