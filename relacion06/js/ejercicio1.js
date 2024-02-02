document.addEventListener("DOMContentLoaded", e => {
    
    var parrafos = document.querySelectorAll("p");

    parrafos.forEach(p => p.style.cursor = "pointer");
    parrafos[0].id = "parrafo1";
    parrafos[1].id = "parrafo2";
    parrafos[2].id = "parrafo3";

    parrafos.forEach(parrafo => {

        parrafo.addEventListener("click", function() {

            parrafos.forEach(p => p.style.color = "black");

            if (parrafo.id === "parrafo1") {
                parrafo.style.color = "red";
            } else if (parrafo.id === "parrafo2") {
                parrafo.style.color = "blue";
            } else {
                parrafo.style.color = "green";
            }
        });
    });
})