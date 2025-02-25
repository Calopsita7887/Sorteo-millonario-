<script>
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

function agregarUsuario() {
    let nombre = document.getElementById("nombre").value.trim();
    let numeros = document.getElementById("numeros").value.trim();
    let cargado = document.getElementById("cargado").value;
    let recomendado = document.getElementById("recomendado").value.trim() || "-";

    if (nombre === "" || numeros === "") {
        alert("Por favor, completa al menos el nombre y los números.");
        return;
    }

    let tabla = document.getElementById("tabla-sorteo").getElementsByTagName('tbody')[0];
    let fila = tabla.insertRow();
    
    fila.insertCell(0).textContent = nombre;
    fila.insertCell(1).textContent = numeros;
    fila.insertCell(2).textContent = cargado;
    fila.insertCell(3).textContent = recomendado;

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("numeros").value = "";
    document.getElementById("recomendado").value = "";
}
</script>
