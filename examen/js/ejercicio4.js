class Reserva {
    constructor() {
        this.aula = "";
        this.profesor = "";
        this.dia = "";
        this.hora = "";
        this.duracion = 1;
    }

    static getAulas() {
        return ["Salón de Actos", "Aula 18", "Aula F12"];
    }

    reservar(aula, profesor, dia, hora, duracion = 1) {
        if (Reserva.getAulas().includes(aula)) {
            this.aula = aula;
        }
        this.profesor = profesor;
        this.dia = dia;
        this.hora = hora;
        this.duracion = duracion;

        console.log("Reserva realizada:");
        document.write("Reserva realizada:<br>");
        this.imprimirReserva();
    }

    aumentarTiempo(profesor, dia, hora, aumentar) {
        if (this.profesor === profesor && this.dia === dia && this.hora === hora) {
            if (this.duracion + aumentar <= 3.5) {
                this.duracion += aumentar;
                console.log("Tiempo de reserva aumentado correctamente:");
                document.write("<br>Tiempo de reserva aumentado correctamente:<br>");
                this.imprimirReserva();
            } else {
                console.log("No se puede aumentar el tiempo, se supera el límite de 3.5 horas.");
                document.write("<br>No se puede aumentar el tiempo, se supera el límite de 3.5 horas.");
            }
        } else {
            console.log("No se puede aumentar el tiempo, la reserva actual no coincide con los parámetros proporcionados.");
            document.write("<br>No se puede aumentar el tiempo, la reserva actual no coincide con los parámetros proporcionados.");
        }
    }

    imprimirReserva() {
        console.log("Aula: " + this.aula);
        console.log("Profesor: " + this.profesor);
        console.log("Día: " + this.dia);
        console.log("Hora: " + this.hora);
        console.log("Duración: " + this.duracion + " horas");
        document.write("Aula: " + this.aula + "<br>");
        document.write("Profesor: " + this.profesor + "<br>");
        document.write("Día: " + this.dia + "<br>");
        document.write("Hora: " + this.hora + "<br>");
        document.write("Duración: " + this.duracion + " horas<br>");
    }
}

var reserva = new Reserva();
reserva.reservar("Salón de Actos", "Profesor1", "2023-12-15", "09:00", 2);
reserva.aumentarTiempo("Profesor1", "2023-12-15", "09:00", 1);