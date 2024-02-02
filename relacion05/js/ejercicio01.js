var enlaces = document.querySelectorAll("a");

console.log("Hay " + enlaces.length + " enlaces");

console.log(enlaces[enlaces.length - 2].href);

var cont = 0;
enlaces.forEach(enlace => {
    if (enlace.href == "http://www.marca.es/") {
        cont++;
    }
});
console.log("Hay " + cont + " enlaces que enlazan a Marca");

console.log("Hay " + document.querySelectorAll("p")[2].querySelectorAll("a").length + " enlaces en el tercer párrafo");
