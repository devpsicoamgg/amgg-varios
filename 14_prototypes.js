// TEMA: PROTOTYPE EN JAVASCRIPT

// Definimos una función constructora llamada Persona.
// Los parámetros `nombre` y `edad` serán asignados a cada instancia creada.
function Persona(nombre, edad) {
    // La palabra clave `this` hace referencia al objeto que se está creando.
    // Asignamos las propiedades `nombre` y `edad` al objeto.
    this.nombre = nombre;
    this.edad = edad;
  }
  
  // Agregar un método al "prototype" de la función Persona.
  // El método "saludar" imprimirá un mensaje con el nombre y la edad de la persona.
  // Cualquier instancia creada con la función Persona podrá acceder a este método a través de su prototype.
  Persona.prototype.saludar = function() {
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
  };
  
  // Creamos una nueva instancia de Persona utilizando la función constructora.
  // Se pasa el nombre "Juan" y la edad 30 como argumentos para inicializar el objeto.
  const persona1 = new Persona("Juan", 30);
  
  // Llamamos al método "saludar" de la instancia persona1.
  persona1.saludar(); // Output: Hola, soy Juan y tengo 30 años.