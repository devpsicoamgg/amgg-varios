// Explicación sobre el contexto del "this" en JavaScript

// En JavaScript, el valor del "this" depende del contexto de ejecución donde se encuentra una función en el momento de su llamada.
// El "this" generalmente se refiere al objeto desde el cual se llama la función y proporciona acceso a las propiedades y métodos del objeto.

// Función constructora "Persona"
function Persona(nombre) {
  this.nombre = nombre;
}

// Creamos una instancia de "Persona"
const persona1 = new Persona("Juan");

// Método "saludar" para el objeto "persona1"
persona1.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre}.`);
};

// Llamamos al método "saludar"
persona1.saludar(); // Output: "Hola, mi nombre es Juan."

// En este caso, el "this" dentro del método "saludar" se refiere al objeto "persona1" porque la función se llama desde ese objeto.

// ----------------------

// Función "saludar" genérica
function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre}.`);
}

// Objeto "persona2"
const persona2 = {
  nombre: "María",
};

// Utilizando "bind" para enlazar el "this" de la función "saludar" con el objeto "persona2"
const saludarPersona2 = saludar.bind(persona2);

// Llamamos a la función enlazada
saludarPersona2(); // Output: "Hola, mi nombre es María."

// En este caso, "bind" se utiliza para crear una nueva función donde el "this" está enlazado al objeto "persona2".
// Al llamar a la función "saludarPersona2", el "this" dentro de la función se refiere a "persona2".

// ----------------------

// Función "sumar" con argumentos
function sumar(a, b) {
  console.log(a + b);
}

// "call" se utiliza para llamar a la función con argumentos específicos y establecer el "this" al objeto proporcionado.
sumar.call(null, 5, 10); // Output: 15

// "apply" es similar a "call", pero los argumentos se pasan como un arreglo.
sumar.apply(null, [5, 10]); // Output: 15

// En este caso, como "sumar" no hace uso del "this" ni se refiere a propiedades del objeto, podemos pasar "null" como el primer argumento.
// Esto hace que el "this" dentro de la función sea el objeto global (por ejemplo, "window" en navegadores).
// En este ejemplo, se llamará a la función "sumar" con los argumentos 5 y 10, mostrando 15 como resultado.

// ----------------------

// Otro ejemplo con "call" y "apply"

const persona3 = {
  nombre: "Pedro",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  },
};

const persona4 = {
  nombre: "Laura",
};

// Llamamos al método "saludar" de "persona3" pero utilizando "call" con "persona4" como "this".
persona3.saludar.call(persona4); // Output: "Hola, mi nombre es Laura."

// En este caso, al utilizar "call", establecemos explícitamente el "this" de "persona3.saludar" al objeto "persona4".
// Por lo tanto, "this" dentro del método "saludar" se refiere a "persona4".

// ----------------------

// En resumen:
// - "this" en una función generalmente se refiere al objeto desde el cual se llama la función.
// - "bind" se utiliza para crear una nueva función con el "this" enlazado a un objeto específico.
// - "call" y "apply" se utilizan para llamar a una función con un "this" y argumentos específicos.
