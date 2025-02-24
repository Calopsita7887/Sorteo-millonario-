<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteo Millonario - Día de la Mujer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f2f4; /* Rosa clarito */
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #d65b9f; /* Rosa más intenso */
            font-size: 28px;
            margin-bottom: 20px;
        }
        table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #f0e6f6; /* Lila clarito */
        }
        th {
            background-color: #d65b9f; /* Rosa más intenso */
            color: white;
            font-weight: bold;
        }
        tr:hover {
            background-color: #f0e6f6; /* Lila clarito al pasar el mouse */
        }
        .special {
            color: #d65b9f; /* Rosa destacado */
            font-weight: bold;
        }
        /* Fondo pastel para cada fila */
        .fila-rosa { background-color: #fff0f5; } /* Rosa clarito */
        .fila-lila { background-color: #f8f0fc; } /* Lila clarito */
        .fila-celeste { background-color: #e6f7ff; } /* Celeste clarito */
        .fila-verde { background-color: #f0fff0; } /* Verde clarito */
        .fila-naranja { background-color: #fff8f0; } /* Naranja clarito */

        /* Estilo del buscador */
        .buscador {
            text-align: center;
            margin-bottom: 20px;
        }
        .buscador input {
            padding: 10px;
            width: 300px;
            border: 2px solid #d65b9f;
            border-radius: 5px;
            font-size: 16px;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>

    <h1>Tabla para el Sorteo Millonario - Día de la Mujer</h1>

    <!-- Cuadro de búsqueda -->
    <div class="buscador">
        <input type="text" id="buscador" placeholder="Escribe un nombre o número..." onkeyup="filtrarTabla()">
    </div>

    <table id="tabla-sorteo">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Números Asignados</th>
                <th>Cargó $5000 o más (Sí/No)</th>
                <th>Recomendado Por</th>
            </tr>
        </thead>
        <tbody>
            <tr class="fila-rosa">
                <td>Javi_ga</td>
                <td>10</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-lila">
                <td>Eva_ga</td>
                <td>34</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-celeste">
                <td>Nadia_ga</td>
                <td>38, 74, 2581</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-verde">
                <td>Nacho_cel</td>
                <td>77, 86</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-naranja">
                <td>Lucia_multi</td>
                <td>1019</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-rosa">
                <td>Ruth_winkler</td>
                <td>1024</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-lila">
                <td>Gonze_ga</td>
                <td>1032, 1055</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-celeste">
                <td>Ale_bet</td>
                <td>1037</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-verde">
                <td>May_ga32</td>
                <td>1042</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-naranja">
                <td>Carina_ga</td>
                <td>1054</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-rosa">
                <td>Ale_ga33</td>
                <td>1043, 1045, 1083</td>
                <td>Sí</td>
                <td class="special">Pame_8415</td>
            </tr>
            <tr class="fila-lila">
                <td>Pame_8415</td>
                <td>1051, 1077</td>
                <td>No</td>
                <td>-</td>
            </tr>
            <tr class="fila-celeste">
                <td>Gladys_ga</td>
                <td>1044, 1068</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-verde">
                <td>Silvina_meza</td>
                <td>1092, 1099</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-naranja">
                <td>Valeria_60</td>
                <td>1085, 1088, 1090</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-rosa">
                <td>laly_gana</td>
                <td>2236</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-lila">
                <td>Pau_1279</td>
                <td>2560</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-celeste">
                <td>lucas_ff</td>
                <td>2562</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-verde">
                <td>Fabyan10</td>
                <td>2584, 2586, 2588, 2589, 2590, 2593, 2694, 2596, 2600, 2601, 2599, 2604, 2609, 2611, 2617, 2621, 2625, 2628, 2606, 2615</td>
                <td>Sí</td>
                <td>Carlitos_GA</td>
            </tr>
            <tr class="fila-naranja">
                <td>Carlitos_GA</td>
                <td>2614, 2630</td>
                <td>No</td>
                <td>-</td>
            </tr>
            <tr class="fila-rosa">
                <td>Marta_17</td>
                <td>7543, 7553, 7567, 7545, 7552, 7559, 7566, 7574, 7579</td>
                <td>Sí</td>
                <td>-</td>
            </tr>
            <tr class="fila-lila">
                <td>Natalia7505</td>
                <td>7567, 7572</td>
                <td>Sí</td>
                <td class="special">Marta_17</td>
            </tr>
        </tbody>
    </table>

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

</body>
</html>
