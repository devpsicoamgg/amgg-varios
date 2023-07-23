// CLASES:
// Es comun en la mayoria de lenguajes:
// la clase esta compuesta por ENTIDADES, estas son representaciones de objetos, cosas y/o conceptos del mundo tangible.
// las CLASE CONJUNTO DE DATOS QUE PERTENECE A UNA ENTIDAD, similares a plantillas o modelos.
// las INSTANCIA  terminan siendo objetos y las entidades los "moldes" para hacer mas ???????
// Existen 2 formas diferentes de crear una clase:

// FUNCIÓN CONSTRUCTORA // SE CREA LA CLASE EN UNA FUNCIÓN .
function Auto(puertas, color, marca, año, ruedas) {
  this.puertas = puertas;
  this.color = color;
  this.marca = marca;
  this.año = año;
  this.ruedas = ruedas;

  // dentro del bloque va el método.
  // el metodo es una función dentro de la entidad

  this.informacion = function () {
    console.log(`Este es un ${this.marca} de color ${this.color} `);
  };
}
let miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4); // así se crea una nueva entidad

console.log(miPrimerAuto); // arroja el nombre de la clase y toda la información de la instancia.
console.log(miPrimerAuto.marca); // se accede al valor por dot notation o [" "]
miPrimerAuto.información(); // se invoca el metodo accediendo a las propiedades dl objeto con dot notation
//-----------------------------------------------------------------------------------------------
// EXPRESIÓN DE CLASE
class Paciente {
    // INICIA CON PALABRA RESERVADA CLASS Y MAYUSCULA INICIAL PARA
    constructor(nombre, nacionalidad, telefono, dx, correo) {
      // posterior palabra constructor
      this.nombre = nombre;
      this.nacionalidad = nacionalidad;
      this.telefono = telefono;
      this.dx = dx;
      this.correo = correo;
    }
    // los metodos van fuera del constructor 
    // nombre del metodo () { }
    informacion() {
      console.log(`El paciente ${this.nombre} esta actualmente con diagnostico de ${this.dx} `)
    }
  }
  let pcte1 = new Paciente("Alberto", "Colombiano", 2462672626, "F412- Mixto", "psico.amgg@gmail.com"); 
  
  console.log(pcte1); //se invoca
  
  pcte1.informacion()

  
