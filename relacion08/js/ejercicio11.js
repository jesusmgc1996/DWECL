function mostrarCompleto(parrafo) {
    parrafo.innerText = parrafo.textContent;
    parrafo.removeEventListener('mouseover', mostrarCompleto);
}