// Explicación general de la función anónima autoinvocada (IIFE):
// Una función anónima autoinvocada es una construcción en JavaScript que permite definir y ejecutar una función al mismo tiempo.
// Se define utilizando la sintaxis (function() { ... })();. El código dentro de la función se ejecutará inmediatamente después de ser definido.
// Esta técnica se utiliza para encapsular código, evitar contaminación del ámbito global y mejorar la organización del código.

(function() {
    // Beneficios y alcances de la función anónima autoinvocada:
    // - Encapsulación: Las variables y funciones definidas dentro de la función autoinvocada están encapsuladas dentro de su propio ámbito.
    //   Esto evita conflictos de nombres con otras variables definidas en otros lugares del código y mantiene el código más seguro y organizado.
  
    // - Evitar contaminación del ámbito global: Al no tener un nombre asignado, la función autoinvocada no agrega nada al ámbito global.
    //   Esto ayuda a mantener limpio y organizado el espacio global de variables y funciones, evitando colisiones con librerías externas.
  
    // - Ejecución inmediata: La función se ejecuta inmediatamente después de ser definida, lo que puede ser útil para inicializar variables,
    //   cargar módulos, y realizar configuraciones iniciales en el programa.
  
    // Código dentro de la función autoinvocada
    const mensaje = "¡Hola desde la función anónima autoinvocada!";
    console.log(mensaje);
  })();
  
  // Fuera de la función autoinvocada, esta línea de código se ejecutará normalmente
  console.log("Esta línea se ejecuta fuera de la función autoinvocada.");
  