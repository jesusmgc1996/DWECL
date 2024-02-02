document.addEventListener("DOMContentLoaded", e => {
    var velocidad = 0;

    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowUp") {
            velocidad = Math.min(velocidad + 1, 100);
        } else if (event.key === "ArrowDown") {
            velocidad = Math.max(velocidad - 1, 0);
        }

        document.getElementById('velocidad').textContent = "Velocidad " + velocidad;
    });
})