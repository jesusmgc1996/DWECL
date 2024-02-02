function comprobar(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) alert("El triángulo es equilátero");
    else if ((l1 == l2 && l2 != l3) || (l1 == l3 && l2 != l3) || (l1 != l2 && l2 == l3)) alert("El triángulo es isósceles");
    else alert("El triángulo es escaleno");
}