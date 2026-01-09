<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista dinámica</title>
</head>
<body>

    <ol id="lista">
        <li>Elemento 1</li>
    </ol>

    <button onclick="añadir()">Añadir</button>
    <button onclick="borrarPrimero()">Borrar primer elemento</button>
    <button onclick="borrarUltimo()">Borrar último elemento</button>

    <script>
        function añadir() {
            let texto = prompt("Introduce un texto");

            if (texto !== null && texto.trim() !== "") {
                let li = document.createElement("li");
                li.textContent = texto;
                document.getElementById("lista").appendChild(li);
            }
        }

        function borrarPrimero() {
            let lista = document.getElementById("lista");
            if (lista.firstElementChild) {
                lista.removeChild(lista.firstElementChild);
            }
        }

        function borrarUltimo() {
            let lista = document.getElementById("lista");
            if (lista.lastElementChild) {
                lista.removeChild(lista.lastElementChild);
            }
        }
    </script>

</body>
</html>
