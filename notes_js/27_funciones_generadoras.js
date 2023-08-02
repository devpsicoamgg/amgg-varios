// Se define una función generadora utilizando la sintaxis de function*.
function* generarNumeros() {
  let numero = 1;

  while (true) {
    // Se usa la palabra clave "yield" para devolver el valor actual y pausar la función.
    yield numero;
    numero++;
  }
}
// Se crea un iterador llamando a la función generadora.
const iterador = generarNumeros();

// Se usa el iterador para obtener los primeros 5 números generados.
for (let i = 0; i < 5; i++) {
  const numeroGenerado = iterador.next().value;
  console.log(numeroGenerado);
}
