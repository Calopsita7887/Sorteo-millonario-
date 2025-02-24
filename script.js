function filtrarTabla() {
    let filtro = document.getElementById("buscador").value.toLowerCase();
    let filas = document.querySelectorAll("#tabla-sorteo tbody tr");

    filas.forEach(fila => {
        let nombre = fila.cells[0]?.textContent.toLowerCase() || "";
        let numeros = fila.cells[1]?.textContent.toLowerCase() || "";

        if (nombre.includes(filtro) || numeros.includes(filtro)) {
            fila.style.display = ""; // Mostrar fila
        } else {
            fila.style.display = "none"; // Ocultar fila
        }
    });
}
