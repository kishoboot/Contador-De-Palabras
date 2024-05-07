// Solicitar al usuario que ingrese un párrafo de texto
const textoIngresado = prompt("Ingresa un párrafo de texto:");

// Crear un objeto para almacenar las cuentas de palabras
const cuentasPalabras = {};

// Dividir el texto en palabras
const palabras = textoIngresado.split(" ");

// Iterar a través de las palabras
for (const palabra of palabras) {
    // Limpiar la palabra (eliminar signos de puntuación y convertir a minúsculas)
    const palabraLimpia = palabra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();

    // Verificar si la palabra ya ha sido contada
    if (cuentasPalabras[palabraLimpia]) {
        cuentasPalabras[palabraLimpia]++;
    } else {
        cuentasPalabras[palabraLimpia] = 1;
    }
}

// Mostrar el párrafo ingresado
console.log("Párrafo ingresado:");
console.log(textoIngresado);

// Mostrar los resultados
for (const palabra in cuentasPalabras) {
    console.log(`${palabra}: ${cuentasPalabras[palabra]} veces`);
}
