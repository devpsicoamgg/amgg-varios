// OBJETOS
//ESTRUCTURA DONDE SE PUEDE GUARDAR CUALQUIER TIPO DE INFORMACIÓN.
//es una estructura de datos que permite almacenar y organizar datos y funciones relacionadas con ese objeto
//CONTIENE PROPIEDADES CLAVE: VALOR
//PUEDE CONTENER METODO QUE SON LAS MISMAS FUNCIONES
// Y LAS CUALES MANIPULAN SUS PROPIEDADES O REALIZA OTRAS ACCIONES:
var deportes = {
  conBalon: ["Futbol", "Basketball", "Golf"],
  sinBalon: ["Boxeo", "Surf", "Trekking"],
};
var persona = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };

// ACCEDER
var persona2 = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };
console.log(persona2.edad);

// ASIGNAR
var persona3 = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };
persona3.nombre = "Martín";
console.log(persona3.nombre);

//CREAR
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"] };

// BRACKET NOTATION
atuendos["piernas"] = ["Bermudas", "Pantalones"];
console.log(atuendos);

//SI VARIABLE EXTERNA PARA GUARDARLA COMO PROPIEDAD DE UN OBJETO
// AHI  Bracket-Notation sin comillas

let propertyName = "name";
let person = {};

person[propertyName] = "John Doe";

console.log(person.name); // Imprime "John Doe"

//METODOS DE OBJETOS.
// HAS OWN PROPERTY
var libro = { autor: "Borges", genero: "Policial", año: 1990 };
var tienePropiedad = libro.hasOwnProperty("nombre");

console.log(tienePropiedad);

// KEYS
var libro = { autor: "Borges", genero: "Policial", año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

//RECORRER

var mundo = {
  pollo: 1,
  casa: 3,
};

for (let prop in mundo) {
  console.log("Esta es la propiedad: ", prop);
  console.log("Este es el valor: ", mundo[prop]);
}

//THIS
var mascota = {
  animal: "Perro",
  raza: "Ovejero Alemán",
  amistoso: true,
  dueño: "María López",
  info: () => {
    console.log("Mi perro es un  " + this.raza);
  },
};

/* Usa this cuando te refieras a una propiedad o método dentro del objeto actual. Por ejemplo, si tienes un método calcular que 
 utiliza propiedades dentro del objeto, debes usar this.propiedad en lugar de simplemente propiedad.
No uses this cuando te refieras a variables fuera del objeto actual. En su lugar, utiliza el nombre de la variable o la función que 
la contiene. Usa this para crear nuevas propiedades o métodos dentro del objeto actual. Por ejemplo, si deseas agregar una nueva propiedad 
al objeto actual, utiliza this.nuevaPropiedad = valor. No uses this en métodos que se utilizan fuera del objeto actual, como en callbacks 
o cuando pasas el método como argumento a otra función. En este caso, this puede referirse a otro objeto o a undefined, lo que causará 
errores*/

//Para hacer referencia a una propiedad o método dentro de un objeto:
let persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 25,
  presentarse: function () {
    console.log(
      "Hola, mi nombre es " +
        this.nombre +
        " " +
        this.apellido +
        " y tengo " +
        this.edad +
        " años. Y el proximo año tendré " +
        (this.edad + 1) +
        " años. "
    );
  },
};

persona.presentarse(); // Output: Hola, mi nombre es Juan Pérez y tengo 25 años.

//    Para hacer referencia a una propiedad o método dentro de un objeto anidado:

let empresa = {
  nombre: "Mi Empresa",
  empleados: [
    {
      nombre: "Juan",
      apellido: "Pérez",
      edad: 25,
      presentarse: function () {
        console.log(
          "Hola, mi nombre es " +
            this.nombre +
            " " +
            this.apellido +
            " y tengo " +
            this.edad +
            " años."
        );
      },
    },
    {
      nombre: "María",
      apellido: "González",
      edad: 30,
      presentarse: function () {
        console.log(
          "Hola, mi nombre es " +
            this.nombre +
            " " +
            this.apellido +
            " y tengo " +
            this.edad +
            " años."
        );
      },
    },
  ],
};

empresa.empleados[0].presentarse(); // Output: Hola, mi nombre es Juan Pérez y tengo 25 años.
empresa.empleados[1].presentarse(); // Output: Hola, mi nombre es María González y tengo 30 años.
