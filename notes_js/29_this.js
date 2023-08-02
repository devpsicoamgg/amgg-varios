// Ejemplo 1: Contexto Global

console.log(this); // En el contexto global, "this" se refiere al objeto global (por ejemplo, "window" en navegadores o "global" en Node.js).
console.log(window); // En navegadores, "window" es el objeto global y es igual a "this".
console.log(this === window); // Resultado: true (ya que "this" es igual al objeto global).

this.nombre = "Contexto Global"; // Creo una nueva propiedad "nombre" en el objeto global.
console.log(this.nombre); // Accedo a la propiedad "nombre" en el contexto global.

function imprimir() {
  console.log(this.nombre);
}

imprimir(); // Llamo a la función "imprimir" en el contexto global. Como "this" está en el contexto global, "this.nombre"
//accede a la propiedad que se ha creado antes.

// Ejemplo 2: Contexto de Objeto

const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir(); // En este caso, "this" se refiere al objeto "obj" porque la función "imprimir" es un método del objeto.

// Ejemplo 3: Contexto de Objeto con Asignación de Método

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir, // Como "imprimir" es una función definida previamente, puedo asignarla como método directamente a "obj2".
};

obj2.imprimir(); // En este caso, también se refiere al objeto "obj2".

// Ejemplo 4: Arrow Function en Contexto de Objeto

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir(); // En una arrow function, "this" se mantiene vinculado al contexto donde se definió la función, que es el contexto global en este caso.
// Por lo tanto, "this.nombre" no está definido en el contexto global y muestra "undefined".

// Ejemplo 5: Constructor de Función

function Persona(nombre) {
  // Para mantener una referencia al "this" correcto dentro de la función constructora, a menudo se usa una variable como "that" o "self".
  const that = this;
  // En lugar de usar "this.nombre = nombre;", se usa "that.nombre = nombre;" para asegurarse de que "this" se refiera al objeto que se está creando.

  that.nombre = nombre;

  return function () {
    console.log(that.nombre);
  };
}

let jon = new Persona("Jon");
jon(); // En este caso, "this" se refiere al objeto creado por el constructor "Persona". Al ejecutar "jon()", muestra "Jon" que fue asignado correctamente.
