class Paciente {
    // INICIA CON PALABRA RESERVADA CLASS Y MAYUSCULA INICIAL PARA
    constructor(nombre, apellido, nacionalidad, telefono, dx, correo) {
        // posterior palabra constructor
        this.nombre = nombre;
        this.apellido = apellido
        this.nacionalidad = nacionalidad;
        this.telefono = telefono;
        this.dx = dx;
        this.correo = correo;
    }
    // los metodos van fuera del constructor 
    // nombre del metodo () { }
    informacion() {
        console.log(`El paciente ${this.nombre} ${this.apellido} esta actualmente con diagnostico de ${this.dx} `)
    }
}

let pcte1 = new Paciente("Alberto", "Guerrero", "Colombiano", 2462672626, "F412- Mixto ansiedad y depresión", "psico.amgg@gmail.com");

pcte1.informacion()