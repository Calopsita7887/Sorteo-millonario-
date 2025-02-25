function filtrarTabla() {
    let filtro = document.getElementById("buscador").value.toLowerCase();
    let filas = document.querySelectorAll("#tabla-sorteo tbody tr");

    filas.forEach(fila => {
        let nombre = fila.cells[0]?.textContent.toLowerCase() || "";
        let numeros = fila.cells[1]?.textContent.toLowerCase() || "";

        if (nombre.includes(filtro) || numeros.includes(filtro)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}

function agregarUsuario() {
    let nombre = document.getElementById("nombre").value.trim();
    let numeros = document.getElementById("numeros").value.trim();
    let cargado = document.getElementById("cargado").value;
    let recomendado = document.getElementById("recomendado").value.trim() || "-";

    if (nombre === "" || numeros === "") {
        alert("Por favor, completa al menos el nombre y los números.");
        return;
    }

    let tabla = document.querySelector("#tabla-sorteo tbody");
    let fila = document.createElement("tr");

    // Alternar clases de color
    let colores = ["fila-rosa", "fila-lila", "fila-celeste", "fila-verde", "fila-naranja"];
    let filas = tabla.querySelectorAll("tr");
    let colorClase = colores[filas.length % colores.length];
    fila.classList.add(colorClase);

    // Insertar celdas con la información
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${numeros}</td>
        <td>${cargado}</td>
        <td>${recomendado}</td>
    `;

    tabla.appendChild(fila);

    // Limpiar campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("numeros").value = "";
    document.getElementById("recomendado").value = "";
}
