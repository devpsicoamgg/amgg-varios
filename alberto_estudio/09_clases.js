// CLASES:
// Es comun en la mayoria de lenguajes:
// la clase esta compuesta por ENTIDADES, estas son representaciones de objetos, cosas y/o conceptos del mundo tangible.
// las CLASE CONJUNTO DE DATOS QUE PERTENECE A UNA ENTIDAD, similares a plantillas o modelos.
// las INSTANCIA  terminan siendo objetos y las clases los "moldes" para hacer mas
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

  
