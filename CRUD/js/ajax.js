const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });
    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        url: "http://localhost:5555/jugadores",
        success: (respuesta) => {
            respuesta.forEach(el => {
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
        },
        error: (err) => {
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        }
    })
}

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", e => {
    if (e.target === $form) {
        e.preventDefault();
        if (!e.target.id.value) {
            ajax({
                url: "http://localhost:5555/jugadores",
                method: "POST",
                success: (respuesta) => location.reload(),
                error: (err) => {
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
                },
                data: {
                    nombre: e.target.nombre.value,
                    deporte: e.target.deporte.value,
                    equipo: e.target.equipo.value,
                    posicion: e.target.posicion.value,
                    edad: e.target.edad.value,
                }
            });
        } else {
            ajax({
                url: `http://localhost:5555/jugadores/${e.target.id.value}`,
                method: "PUT",
                success: (respuesta) => { location.reload() },
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    nombre: e.target.nombre.value,
                    deporte: e.target.deporte.value,
                    equipo: e.target.equipo.value,
                    posicion: e.target.posicion.value,
                    edad: e.target.edad.value,
                }
            });
        }
        $form.nombre.value = null;
        $form.deporte.value = null;
        $form.equipo.value = null;
        $form.posicion.value = null;
        $form.edad.value = null;
        $form.id.value = null;
    }
});

d.addEventListener("click", e => {
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
        let isDelete = confirm(`¿Estás seguro de eliminar el ${e.target.dataset.id}?`);
        if (isDelete) {
            ajax({
                url: `http://localhost:5555/jugadores/${e.target.dataset.id}`,
                method: "DELETE",
                success: (respuesta) => location.reload(),
                error: (err) => alert(err)
            });
        }
    }
})