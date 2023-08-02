// PROTOTYPE EN JAVASCRIPT

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
Persona.prototype.saludar = function () {
  console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
};

// Creamos una nueva instancia de Persona utilizando la función constructora.
// Se pasa el nombre "Juan" y la edad 30 como argumentos para inicializar el objeto.
const persona1 = new Persona("Juan", 30);

// Llamamos al método "saludar" de la instancia persona1.
persona1.saludar(); // Output: Hola, soy Juan y tengo 30 años.

//HERENCIA PROTOTIPICA
// la herencia se da por la cedena de prototipos porque los objetos en JavaScript se crean a partir de otros objetos.
// Por ejemplo, si tengo un objeto llamado DatosBasicosUsuarios que tiene propiedades llamadas nombre, documento, fechaNacimeinto y diagnosticoInicial,
// datos de contacto y un método llamado obtenerTipoDeIntervención(), puedo crear un nuevo objeto llamado Paciente que herede de Persona.
// El objeto Paciente tendrá las propiedades nombre nombre, documento, fechaNacimeinto y diagnosticoInicial, y el método obtenerTipoDeIntervención(),
// Ej.
function DatosBasicosUsuarios(
  nombre,
  documento,
  fechaNacimiento,
  diagnosticoInicial,
  tipoDeDiagnostico
) {
  // Propiedades de los datos básicos del usuario
  this.nombre = nombre;
  this.documento = documento;
  this.fechaNacimiento = fechaNacimiento;
  this.diagnosticoInicial = diagnosticoInicial;
  this.tipoDeDiagnostico = tipoDeDiagnostico;
}

// Método para obtener el tipo de intervención del usuario
DatosBasicosUsuarios.prototype.obtenerTipoDeIntervencion = function () {
  console.log(
    "Pcte " + this.nombre + " con tipo de dx " + this.tipoDeDiagnostico
  );
};

// Método para mostrar los datos básicos del paciente
DatosBasicosUsuarios.prototype.datosBasicosPcte = function () {
  console.log(
    "Pcte " +
      this.nombre +
      " con doc " +
      this.documento +
      ", nacimiento " +
      this.fechaNacimiento +
      " y tipo de dx " +
      this.tipoDeDiagnostico
  );
};

function Paciente(
  nombre,
  documento,
  fechaNacimiento,
  diagnosticoInicial,
  tipoDeDiagnostico,
  fechaValoracion,
  diagnosticoConfirmado
) {
  // Llamada al constructor del prototipo padre (DatosBasicosUsuarios)
  DatosBasicosUsuarios.call(
    this,
    nombre,
    documento,
    fechaNacimiento,
    diagnosticoInicial,
    tipoDeDiagnostico
  );

  // Propiedades específicas del paciente
  this.fechaValoracion = fechaValoracion;
  this.diagnosticoConfirmado = diagnosticoConfirmado;
}

// Herencia del prototipo de DatosBasicosUsuarios
Paciente.prototype = Object.create(DatosBasicosUsuarios.prototype);
// Restaurar el constructor adecuadamente para Paciente
Paciente.prototype.constructor = Paciente;

// Método para mostrar información específica del paciente
Paciente.prototype.mostrarInformacionPaciente = function () {
  console.log("Fecha de valoración: " + this.fechaValoracion);
  console.log("Tipo de dx: " + this.diagnosticoConfirmado);
};

// Creación de objetos de pacientes
const cam83sua = new Paciente(
  "Alberto Guerrero",
  "CC 78987567",
  "17/10/1983",
  "F412 - Mixto Ansiedad & Depresion",
  "Impresion Diagnostica",
  "25/07/2023",
  "Confirmado"
);
const edwaSpider = new Paciente(
  "Otilia Granados",
  "CC 1078654890",
  "17/10/2009",
  "Problemas relacionados con circunstancias psicosociales",
  "Impresion Diagnostica",
  "25/07/2023",
  "En proceso"
);

// Mostrar información específica de los pacientes
cam83sua.datosBasicosPcte();
cam83sua.mostrarInformacionPaciente();
cam83sua.obtenerTipoDeIntervencion();
console.log("------------------");
edwaSpider.mostrarInformacionPaciente();
