   <!-- Script para el buscador -->
    <script>
        function filtrarTabla() {
            // Obtener el valor del buscador
            let filtro = document.getElementById("buscador").value.toLowerCase();
            // Obtener todas las filas de la tabla
            let filas = document.querySelectorAll("#tabla-sorteo tbody tr");

            // Recorrer las filas y mostrar/ocultar según el filtro
            filas.forEach(fila => {
                let nombre = fila.cells[0].textContent.toLowerCase(); // Columna "Nombre"
                let numeros = fila.cells[1].textContent.toLowerCase(); // Columna "Números Asignados"
                if (nombre.includes(filtro) || numeros.includes(filtro)) {
                    fila.classList.remove("hidden");
                } else {
                    fila.classList.add("hidden");
                }
            });
        }
    </script>
