class Paciente {
    constructor(nombre, nacionalidad, telefono, dx, correo) {
      this.nombre = nombre;
      this.nacionalidad = nacionalidad;
      this.telefono = telefono;
      this.dx = dx;
      this.correo = correo;
    }
  
    // Getter para obtener el nombre del paciente
    getNombre() {
      return this.nombre;
    }
  
    // Setter para establecer el diagnóstico del paciente
    setDiagnostico(diagnostico) {
      this.dx = diagnostico;
    }
  
    informacion() {
      console.log(`El paciente ${this.nombre} está actualmente con diagnóstico de ${this.dx}`);
    }
  }

  class Paciente {
    constructor(nombre, nacionalidad, telefono, dx, correo) {
      this.nombre = nombre;
      this.nacionalidad = nacionalidad;
      this.telefono = telefono;
      this.dx = dx;
      this.correo = correo;
    }
  
    // Getter para obtener el nombre del paciente
    getNombre() {
      return this.nombre;
    }
  
    // Setter para establecer el diagnóstico del paciente
    setDiagnostico(diagnostico) {
      this.dx = diagnostico;
    }
  
    informacion() {
      console.log(`El paciente ${this.nombre} está actualmente con diagnóstico de ${this.dx}`);
    }
  }
  
  
  // Se crea una instancia de Paciente con datos de ejemplo
  const paciente1 = new Paciente("Juan Pérez", "Mexicano", "555-1234", "G221 - Esquizofrenia", "juan@example.com");
  
  // Se utiliza el método informacion() para mostrar la información del paciente
  paciente1.informacion();
  
  // Se utiliza el getter para obtener el nombre del paciente
  const nombrePaciente = paciente1.getNombre();
  console.log(`Nombre del paciente: ${nombrePaciente}`);
  
  // Se usa el setter para establecer un nuevo diagnóstico
  paciente1.setDiagnostico("F412 - Trastorno de ansiedad");
  paciente1.informacion(); // Mostrar la información actualizada del paciente
  
  
  