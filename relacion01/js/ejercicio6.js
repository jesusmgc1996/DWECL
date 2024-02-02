function tablaMultiplicar(num) {
    if (num > 1 && num < 10) {
        for (let i = 1; i <= 10; i++) {
            document.write(`${num} x ${i} = ` + (num * i) + "<br>");
        }
    }
}