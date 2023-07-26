// CLASES:
// Es común en la mayoría de lenguajes:
// La clase está compuesta por ENTIDADES, estas son representaciones de objetos, cosas y/o conceptos del mundo tangible.
// Las CLASES son conjuntos de datos que pertenecen a una entidad, similares a plantillas o modelos.
// Las INSTANCIAS terminan siendo objetos y las clases son los "moldes" para crear más.

// EXPRESIÓN DE CLASE
class Paciente {
  // INICIA CON PALABRA RESERVADA CLASS Y MAYÚSCULA INICIAL PARA
  constructor(nombre, nacionalidad, telefono, dx, correo) {
    // Posterior palabra constructor
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
    this.telefono = telefono;
    this.dx = dx;
    this.correo = correo;
  }

  // Los métodos van fuera del constructor
  // nombre del método () { }
  informacion() {
    console.log(`El paciente ${this.nombre} está actualmente con diagnóstico de ${this.dx}`);
  }
}

// Clase que hereda de Paciente, llamada Caracteristica
class Caracteristica extends Paciente {
  constructor(nombre, nacionalidad, telefono, dx, correo, caracteristicaEspecial) {
    // Llamada al constructor de la clase base (Paciente) utilizando la palabra reservada "super"
    super(nombre, nacionalidad, telefono, dx, correo);

    // Propiedad específica para Caracteristica
    this.caracteristicaEspecial = caracteristicaEspecial;
  }

  // Método específico para Caracteristica
  mostrarCaracteristicaEspecial() {
    console.log(`Este paciente tiene la característica: ${this.caracteristicaEspecial}`);
  }
}

// Creación de una instancia de Paciente
let pcte1 = new Paciente("Alberto", "Colombiano", 2462672626, "F412- Mixto", "psico.amgg@gmail.com");
console.log(pcte1); // Se invoca
pcte1.informacion();

// Creación de una instancia de Caracteristica
let pcteCaracteristica = new Caracteristica("Carlos", "Mexicano", 3545355353, "G221 - Esquizofrenia", "carlos@gmail.com", "Ideación Suicida");
console.log(pcteCaracteristica);
pcteCaracteristica.informacion();
pcteCaracteristica.mostrarCaracteristicaEspecial();