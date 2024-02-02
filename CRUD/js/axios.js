const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let respuesta = await axios.get("http://localhost:5555/jugadores"), json = await respuesta.data;
        console.log(json);
        json.forEach((el) => {
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".deporte").textContent = el.deporte;
            $template.querySelector(".equipo").textContent = el.equipo;
            $template.querySelector(".posicion").textContent = el.posicion;
            $template.querySelector(".edad").textContent = el.edad;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.nombre = el.nombre;
            $template.querySelector(".edit").dataset.deporte = el.deporte;
            $template.querySelector(".edit").dataset.equipo = el.equipo;
            $template.querySelector(".edit").dataset.posicion = el.posicion;
            $template.querySelector(".edit").dataset.edad = el.edad;
            $template.querySelector(".delete").dataset.id = el.id;
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();
        if (!e.target.id.value) {
            try {
                let options = {
                    method: "POST",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        deporte: e.target.deporte.value,
                        equipo: e.target.equipo.value,
                        posicion: e.target.posicion.value,
                        edad: e.target.edad.value,
                    })
                };
                let respuesta = await axios("http://localhost:5555/jugadores", options);
                let json = await respuesta.data;
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            try {
                let options = {
                    method: "PUT",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        deporte: e.target.deporte.value,
                        equipo: e.target.equipo.value,
                        posicion: e.target.posicion.value,
                        edad: e.target.edad.value,
                    }),
                };
                let respuesta = await axios(`http://localhost:5555/jugadores/${e.target.id.value}`, options);
                let json = await respuesta.data;
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
        $form.nombre.value = null;
        $form.deporte.value = null;
        $form.equipo.value = null;
        $form.posicion.value = null;
        $form.edad.value = null;
        $form.id.value = null;
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Jugador";
        $form.nombre.value = e.target.dataset.nombre;
        $form.deporte.value = e.target.dataset.deporte;
        $form.equipo.value = e.target.dataset.equipo;
        $form.posicion.value = e.target.dataset.posicion;
        $form.edad.value = e.target.dataset.edad;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
        );
        if (isDelete) {
            try {
                let options = {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                };
                let respuesta = await axios(`http://localhost:5555/jugadores/${e.target.dataset.id}`, options);
                let json = await respuesta.data;
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});