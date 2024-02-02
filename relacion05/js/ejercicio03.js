function agregarElemento() {
    var nuevo = document.createElement("li");
    nuevo.appendChild(document.createTextNode("Nuevo elemento"));
    document.querySelector("#diariosdeportivos").appendChild(nuevo);
}